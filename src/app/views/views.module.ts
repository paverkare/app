import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {ViewsRoutingModule} from './views-routing.module';
import {SharedModule} from '../shared/shared.module';
import {CustomizerComponent} from './customizer/customizer.component';
import {HomeComponent} from './home/home.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {InstafeedComponent} from './instafeed/instafeed.component';
import {ProfileComponent} from './profile/profile.component';
import {CartComponent} from './cart/cart.component';


@NgModule({
    declarations: [
        CustomizerComponent,
        HomeComponent,
        WishlistComponent,
        InstafeedComponent,
        ProfileComponent,
        CartComponent,
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ViewsRoutingModule,
        SharedModule
    ]
})
export class ViewsModule {}
