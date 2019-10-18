import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Globalization} from '@ionic-native/globalization/ngx';
import {MessageService} from '../../core/services/message/message.service';


@Component({
    selector: 'app-default-layout',
    templateUrl: './default-layout.component.html',
    styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {

    constructor(translate: TranslateService,
                private messageService: MessageService) {
        translate.addLangs(['fr', 'en']);
        translate.setDefaultLang('fr');
        translate.use('fr');
    }

    ngOnInit() {
    }

    wishList() {
        this.messageService.emit('reload wishList');
    }

    orders() {
        this.messageService.emit('reload orders');
    }
}
