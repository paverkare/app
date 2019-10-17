import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../core/services/order/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  private cartItem;
  constructor(private orderService: OrderService) { }

  ngOnInit() {}

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
