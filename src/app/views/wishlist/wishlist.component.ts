import {Component, OnInit} from '@angular/core';
import {WishListService} from '../../core/services/wishlist/wishlist.service';
import {CustomModel} from '../../core/models/Custom';
import {LoadingController, ToastController} from '@ionic/angular';
import {CartService} from '../../core/services/cart/cart.service';
import {MessageService} from '../../core/services/message/message.service';
import {AuthService} from '../../auth/services/auth.service';
import {ToastService} from '../../core/services/toast/toast.service';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {

    private wishList: CustomModel[];

    constructor(private wishListService: WishListService,
                private toastService: ToastService,
                private cartService: CartService,
                private messageService: MessageService,
                private authService: AuthService,
                private loadingController: LoadingController) {
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

    async getWishList() {

        const loader = await this.loadingController.create({message: 'Loading...'});
        await loader.present();

        this.wishListService.getAll().then(
            wishList => {
                if (wishList.status === 200) {
                    this.wishList = wishList.data;
                }
            }
        ).catch(e => {
            console.log('error getwishlist');
            console.log(e);
        }).finally(() => {
            loader.dismiss();
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
                this.toastService.info('La montre a été ajouté dans votre panier');
            }
        ).catch(
            async (e) => {
                console.log(e);
                this.toastService.error('Une erreur est survenue lors de l\'ajout de la montre au panier');
            }
        );

    }

    share(img: string) {
        (window as any).plugins.socialsharing.share('#Watch, créer ta montre toi aussi ! 😉😉', 'Augarde', img, 'https://www.augarde.com/');
    }

}
