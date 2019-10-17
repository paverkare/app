import {Component, OnInit} from '@angular/core';
import {WishListService} from '../../core/services/wishlist/wishlist.service';
import {CustomModel} from '../../core/models/Custom';
import {ToastController} from '@ionic/angular';
import {CartService} from '../../core/services/cart/cart.service';
import {MessageService} from '../../core/services/message/message.service';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {

    private wishList: CustomModel[];

    constructor(private wishListService: WishListService,
                private toastController: ToastController,
                private cartService: CartService,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.getWishList();

        this.messageService.listen().subscribe(
            message => {
                if (message === 'reload wishList') {
                    this.getWishList();
                }
            }
        );
    }

    getWishList() {
        this.wishListService.getAll().then(
            wishList => {
                if (wishList.status === 200) {
                    this.wishList = wishList.data;
                }
            }
        ).catch(e => {
            console.log('error getwishlist');
            console.log(e);
        });
    }

    unLike(id: string) {
        this.wishListService.remove(id).then(
            () => {
                this.getWishList();
            }
        );
    }

    async buyItem(idWish: string) {
        this.cartService.create(idWish).then(
          async () => {
              const toast = await this.toastController.create({
                  message: 'La montre a été ajouté dans votre panier',
                  duration: 2000,
                  position: 'top'
              });
              toast.present();
          }
        ).catch(
            async (e) => {
                console.log(e);
                const toast = await this.toastController.create({
                    message: 'La montre a été ajouté dans votre panier',
                    duration: 2000,
                    position: 'top',
                    color: 'danger'
                });
                toast.present();
            }
        );

    }

}
