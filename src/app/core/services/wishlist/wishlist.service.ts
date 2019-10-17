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
        return Axios.get(environment.api + 'user/' + idUser + '/wishlist');
    }

    remove(customId: string): any {
        const userId = '5da8420eead1162014121733';
        return Axios.delete(environment.api + 'user/' + userId + '/wishlist/' + customId);
    }
    /* getById(wishId: string): Observable<CustomModel> {
         const userId = '5da72b63db16e72588f8ed10';
         return this.http.get<CustomModel>(environment.api + 'user/' + userId + '/wishlist/' + wishId);
     }

     create(customId: string): Observable<CustomModel> {
         const userId = '5da72b63db16e72588f8ed10';
         return this.http.post<CustomModel>(environment.api + 'user/' + userId + '/wishlist/', {customId, userId});
     }

     remove(customId: string): any {
         const userId = '5da72b63db16e72588f8ed10';
         return this.http.delete(environment.api + 'user/' + userId + '/wishlist/' + customId);
     }
     */
}
