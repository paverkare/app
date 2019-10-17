import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomModel} from '../../models/Custom';
import {environment} from '../../../../environments/environment';
import Axios from 'axios';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(private http: HttpClient) {
    }

    getAll(): any {
        const idUser = '';
        return Axios.get(environment.api + 'user/' + idUser + '/wishlist');
    }

    getById(wishId: string): Observable<CustomModel> {
        const userId = '';
        return this.http.get<CustomModel>(environment.api + 'user/' + userId + '/cart/' + wishId);
    }

    create(custom_id: string): any {
        const userId = '5da8420eead1162014121733';
        // return this.http.post<CustomModel>(environment.api + 'user/' + userId + '/cart/', {customId, userId});
        return Axios.post(environment.api + 'user/' + userId + '/cart/', {custom_id});
    }

    remove(customId: string): any {
        const userId = '5da8420eead1162014121733';
        return this.http.delete(environment.api + 'user/' + userId + '/cart/' + customId);
    }
}
