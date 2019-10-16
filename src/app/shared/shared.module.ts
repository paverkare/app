import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {DefaultLayoutComponent} from './default-layout/default-layout.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [
      DefaultLayoutComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    TranslateModule,
  ]
})
export class SharedModule { }
