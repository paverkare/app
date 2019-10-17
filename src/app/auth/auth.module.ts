import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicStorageModule} from '@ionic/storage';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './views/login/login.component';
import {IonicModule} from '@ionic/angular';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
      LoginComponent
  ],
  imports: [
    IonicStorageModule.forRoot(),
    CommonModule,
    AuthRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class AuthModule { }
