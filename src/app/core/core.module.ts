import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {IonicModule} from '@ionic/angular';
  import { HTTP } from '@ionic-native/http/ngx';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [
      HTTP
  ]
})
export class CoreModule { }
