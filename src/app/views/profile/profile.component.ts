import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../core/services/order/order.service';
import {CustomModel} from '../../core/models/Custom';
import {MessageService} from '../../core/services/message/message.service';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    private order: CustomModel[];

    constructor(private orderService: OrderService,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.getOrders();
        this.messageService.listen().subscribe(
            msg => {
                if (msg === 'reload orders') {
                    this.getOrders();
                }
            }
        );
    }

    getOrders() {
        this.orderService.getOrder().then(
            order => {
                if (order.status === 200) {
                    this.order = order.data;
                }
            }
        );
    }

}
