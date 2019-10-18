import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CustomService} from '../../core/services/custom/custom.service';
import {CustomModel} from '../../core/models/Custom';
import {ProductService} from '../../core/services/product/product.service';
import {ProductModel} from '../../core/models/Product';
import {IonSlides, LoadingController} from '@ionic/angular';
import {WishListService} from '../../core/services/wishlist/wishlist.service';
import {AuthService} from '../../auth/services/auth.service';
import {Router} from '@angular/router';
import {ToastService} from '../../core/services/toast/toast.service';


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
              private router: Router,
              private toastService: ToastService) {}

  ngOnInit() {}

  async ionViewWillEnter() {

    await this.configure();
  }

  async configure() {

    const loading = await this.loaderController.create({message: 'Loading...'});

    await loading.present();

    try {

      const result = await this.productService.getAll();

      this.data = (result.data as Array<ProductModel>).reduce((accumulator: any[], currentValue: ProductModel) => {

        if (!accumulator[(currentValue.type as any).name]) {

          accumulator[(currentValue.type as any).name] = [];
        }

        (accumulator[(currentValue.type as any).name] as Array<ProductModel>).push(currentValue);

        return accumulator;

      }, []) as [];

      this.retrieve = true;

      await loading.dismiss();

      await this.slidesStrap.update();

    } catch (e) {

      await loading.dismiss();
      await this.toastService.error('Can\'t get the config');
    }
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

      const result = await this.wishListService.create(strap, dial);
      this.toastService.info('Votre montre a été ajoutée à vos favoris !');

    } catch (e) {
      this.toastService.error('Une erreur est survenue lors de \'ajout de votre montre à vos favoris');
    }
  }
}
