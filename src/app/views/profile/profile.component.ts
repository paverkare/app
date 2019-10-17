import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../core/services/order/order.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  private order;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrder('').then(
      order => {
          if (order.status === 200) {
              this.order = order.data;
              console.log(this.order);
          }
      }
    );
  }

}
