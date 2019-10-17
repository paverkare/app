import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicStorageModule} from '@ionic/storage';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './views/login/login.component';
import {IonicModule} from '@ionic/angular';
import {ViewsModule} from "../views/views.module";

@NgModule({
  declarations: [
      LoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    AuthRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    ViewsModule
  ]
})
export class AuthModule { }
