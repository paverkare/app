import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultLayoutComponent} from '../shared/default-layout/default-layout.component';
import {CustomizerComponent} from './customizer/customizer.component';
import {HomeComponent} from './home/home.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {InstafeedComponent} from './instafeed/instafeed.component';
import {ProfileComponent} from './profile/profile.component';
import {CartComponent} from './cart/cart.component';
import {AuthGuard} from '../guard/auth-guard.guard';

const routes: Routes = [
    {
        path: 'tabs',
        component: DefaultLayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'wishList',
                component: WishlistComponent
            },
            {
                path: 'customizer',
                component: CustomizerComponent
            },
            {
                path: 'instaFeed',
                component: InstafeedComponent
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        component: ProfileComponent,
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'auth',
                        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
                    }
                ]
            },
            {
                path: 'cart',
                component: CartComponent
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule {}
