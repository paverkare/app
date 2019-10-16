import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultLayoutComponent} from '../shared/default-layout/default-layout.component';
import {CustomizerComponent} from './customizer/customizer.component';
import {HomeComponent} from './home/home.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {InstafeedComponent} from './instafeed/instafeed.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
    {
        path: 'tabs',
        component: DefaultLayoutComponent,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        component: HomeComponent
                    }
                ]
            },
            {
                path: 'wishList',
                children: [
                    {
                        path: '',
                        component: WishlistComponent
                    }
                ]
            },
            {
                path: 'customizer',
                children: [
                    {
                        path: '',
                        component: CustomizerComponent
                    }
                ]
            },
            {
                path: 'instaFeed',
                children: [
                    {
                        path: '',
                        component: InstafeedComponent
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        component: ProfileComponent
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule {}
