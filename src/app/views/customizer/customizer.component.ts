import { Component, OnInit } from '@angular/core';
import {CustomService} from '../../core/services/custom/custom.service';
import {CustomModel} from '../../core/models/Custom';
import {ProductService} from '../../core/services/product/product.service';
import {ProductModel} from '../../core/models/Product';
import {LoadingController} from "@ionic/angular";


@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss'],
})
export class CustomizerComponent implements OnInit {

  private custom: CustomModel[];

  data: [];

  option1 = {
    direction: 'horizontal',
    loop: true
  };

  option2 = {
    direction: 'vertical',
    loop: true
  };

  constructor(private customService: CustomService, private productService: ProductService, private loaderController: LoadingController) {}

  ngOnInit() {}

  async ionViewWillEnter() {

    await this.configure();
  }

  async configure() {

    const loading = await this.loaderController.create({message: "Loading..."});

    await loading.present();

    const result = await this.productService.getAll();

    this.data = (result.data as Array<ProductModel>).reduce((accumulator: any[], currentValue: ProductModel) => {

      if (!accumulator[(currentValue.type as any).name]) {

        accumulator[(currentValue.type as any).name] = [];
      }
      console.log((currentValue.type as any).name);

      (accumulator[(currentValue.type as any).name] as Array<ProductModel>).push(currentValue);

      return accumulator;

    }, []) as [];

    console.log(this.data);

    await loading.dismiss();
  }
}
