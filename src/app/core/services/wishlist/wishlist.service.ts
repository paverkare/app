import {Injectable} from '@angular/core';
import Axios from 'axios';

@Injectable({
    providedIn: 'root'
})
export class WishListService {

    constructor() {
    }

    getAll(): any {
        return Axios.get('user/wishlist');
    }

    remove(customId: string): any {
        return Axios.delete('user/wishlist/' + customId);
    }

    create(idBracelet: string, idCadran: string){

        return Axios.post('user/wishlist', {idBracelet, idCadran});
    }
}
