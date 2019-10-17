import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {DefaultLayoutComponent} from './default-layout/default-layout.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {HeaderComponent} from './header/header.component';



@NgModule({
  declarations: [
    DefaultLayoutComponent,
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    TranslateModule,
  ]
})
export class SharedModule { }
