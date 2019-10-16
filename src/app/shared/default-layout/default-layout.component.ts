import { Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization/ngx';


@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {

  constructor(translate: TranslateService) {
    translate.addLangs(['fr', 'en']);
    translate.setDefaultLang('fr');
    translate.use('fr');
  }

  ngOnInit() {}
}
