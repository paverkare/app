import {Component, OnInit} from '@angular/core';
import {CartService} from '../../core/services/cart/cart.service';
import {CustomModel} from '../../core/models/Custom';
import {MessageService} from '../../core/services/message/message.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

    private cartItems: CustomModel[];

    constructor(private cartService: CartService,
                private messageService: MessageService) {
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
                }
            }
        ).catch(
            e => console.log(e)
        );
    }

}
