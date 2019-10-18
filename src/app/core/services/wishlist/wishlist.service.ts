import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {HTTP} from '@ionic-native/http/ngx';
import {Observable} from 'rxjs';
import {CustomModel} from '../../models/Custom';
import {environment} from '../../../../environments/environment';
import Axios from 'axios';

@Injectable({
    providedIn: 'root'
})
export class WishListService {

    constructor(private http: HTTP,
                private _http: HttpClient) {
    }

    getAll(): any {
        const idUser = '5da8420eead1162014121733';
        return Axios.get('user/wishlist');
    }

    remove(customId: string): any {
        const userId = '5da8420eead1162014121733';
        return Axios.delete('user/wishlist/' + customId);
    }

    create(idBracelet: string, idCadran: string){

        return Axios.post('user/wishlist', {idBracelet, idCadran});
    }
}
