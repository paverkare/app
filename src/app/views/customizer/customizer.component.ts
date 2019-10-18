import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CustomService} from '../../core/services/custom/custom.service';
import {CustomModel} from '../../core/models/Custom';
import {ProductService} from '../../core/services/product/product.service';
import {ProductModel} from '../../core/models/Product';
import {IonSlides, LoadingController} from '@ionic/angular';
import {WishListService} from '../../core/services/wishlist/wishlist.service';
import {AuthService} from '../../auth/services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss'],
})
export class CustomizerComponent implements OnInit {

  private custom: CustomModel[];

  @ViewChild('slidesStrap', {static: false}) slidesStrap: IonSlides;

  @ViewChild('slidesDial', {static: false}) slidesDial: IonSlides;

  data: [];

  retrieve = false;

  option1 = {
    direction: 'horizontal',
    loop: true
  };

  option2 = {
    direction: 'vertical',
    loop: true
  };

  constructor(private customService: CustomService,
              private productService: ProductService,
              private loaderController: LoadingController,
              private wishListService: WishListService,
              private authService: AuthService,
              private router: Router) {}

  ngOnInit() {}

  async ionViewWillEnter() {

    await this.configure();
  }

  async configure() {

    const loading = await this.loaderController.create({message: 'Loading...'});

    await loading.present();

    const result = await this.productService.getAll();

    this.data = (result.data as Array<ProductModel>).reduce((accumulator: any[], currentValue: ProductModel) => {

      if (!accumulator[(currentValue.type as any).name]) {

        accumulator[(currentValue.type as any).name] = [];
      }

      (accumulator[(currentValue.type as any).name] as Array<ProductModel>).push(currentValue);

      return accumulator;

    }, []) as [];

    console.log(this.data);

    this.retrieve = true;

    await loading.dismiss();

    await this.slidesStrap.update();
  }

  async addInWishList() {

    try {

      if (!this.authService.isLog()) {

        return await this.router.navigate(['/tabs/auth/login']);
      }

      const indexStrap = await this.slidesStrap.getActiveIndex() - 1;
      const indexDial = await this.slidesDial.getActiveIndex() - 1;
      const strap = (this.data as any).bracelet[indexStrap];
      const dial = (this.data as any).cadran[indexDial];

      console.log(strap);
      console.log(dial);

      const result = await this.wishListService.create(strap, dial);

      // TODO toast de succés

    } catch (e) {

      // TODO toast d'erreur
    }
  }
}
