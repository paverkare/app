import {Component, OnInit} from '@angular/core';
import {CartService} from '../../core/services/cart/cart.service';
import {CustomModel} from '../../core/models/Custom';
import {MessageService} from '../../core/services/message/message.service';
import {ToastService} from '../../core/services/toast/toast.service';
import {OrderService} from '../../core/services/order/order.service';

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
                private orderService: OrderService) {
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

    getCartItems() {
        this.cartService.getAll().then(
            items => {
                if (items.status === 200) {
                    this.cartItems = items.data;
                    console.log(items.data.map(item => item._id));
                }
            }
        ).catch(
            e => console.log(e)
        );
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
    const customArray = this.cartItem.map(item => item._id);
    // ['5da709a86a1c320a7855cb29', '5da7156a800af04084557e15']
    this.orderService.createOrder('', customArray ).then(
      order => {
        if (order.status === 200) {
            console.log('ok');
        }
      }
    );
  }

}
