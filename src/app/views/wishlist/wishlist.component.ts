import {Component, OnInit} from '@angular/core';
import {WishListService} from '../../core/services/wishlist/wishlist.service';
import {CustomModel} from '../../core/models/Custom';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {

    private wishList: CustomModel[];

    constructor(private wishListService: WishListService) {
    }

    ngOnInit() {
        this.wishListService.getAll().then(
            wishList => {
                this.wishList = JSON.parse(wishList.data);
                console.log(this.wishList);
            }
        ).catch(e => {
            this.wishListService._getAll().subscribe(
                wishList => this.wishList = wishList
            );
        });
    }

    unLike(id: string) {
        this.wishListService.remove(id).then(
            result => {
                console.log('***************************');
                console.log(JSON.parse(result));
                this.wishListService = JSON.parse(result);
            }
        );
    }

}
