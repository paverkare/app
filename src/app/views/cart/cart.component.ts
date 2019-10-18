import {Component, OnInit} from '@angular/core';
import {CartService} from '../../core/services/cart/cart.service';
import {CustomModel} from '../../core/models/Custom';
import {MessageService} from '../../core/services/message/message.service';
import {ToastService} from '../../core/services/toast/toast.service';
import {OrderService} from '../../core/services/order/order.service';
import {LoadingController} from '@ionic/angular';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

    private cartItems: CustomModel[];

    constructor(private cartService: CartService,
                private messageService: MessageService,
                private toastService: ToastService,
                private orderService: OrderService,
                private loadingController: LoadingController) {
    }

    ngOnInit() {
        this.getCartItems();
        this.messageService.listen().subscribe(
            msg => {
                if (msg === 'reload cart') {
                    this.getCartItems();
                }
            }
        );
    }

    async getCartItems() {

        const loader = await this.loadingController.create({message: 'Loading...'});
        await loader.present();

        this.cartService.getAll().then(
            items => {
                if (items.status === 200) {
                    this.cartItems = items.data;
                    console.log(items.data.map(item => item._id));
                }
            }
        ).catch(
            e => console.log(e)
        ).finally(() => loader.dismiss());
    }

    removeItem(idItem: string) {
        this.cartService.remove(idItem).then(
            success => {
                this.getCartItems();
                this.toastService.info('La montre a été enlevé du panier');
            }
        ).catch(
            err => {
                this.toastService.error('Une erreur est survenue');
            }
        );
    }

    createOrder() {
        const customArray = this.cartItems.map(item => item._id);
        this.orderService.createOrder(customArray).then(
            order => {
                if (order.status === 200) {
                    this.getCartItems();
                    this.share();
                }
            }
        );
    }


    getTotal(): number {
        if (this.cartItems) {
            return this.cartItems.map(item => item.price).reduce((n, o) => n + o);
        }
        return 0;
    }

    share() {
        const customImg = this.cartItems.map(item => item.image);
        (window as any).plugins.socialsharing.share('#Watch, Partage ton contenu ! 😉😉', 'Augarde', customImg, 'https://www.augarde.com/');
    }

}
