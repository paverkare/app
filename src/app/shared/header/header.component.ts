import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../core/services/message/message.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    constructor(private messageService: MessageService) {
    }

    ngOnInit() {
    }

    refreshCart() {
        this.messageService.emit('reload cart');
    }

}
