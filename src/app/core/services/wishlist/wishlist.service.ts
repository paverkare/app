import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomModel} from '../../models/Custom';
import {environment} from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class WishListService {

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Array<CustomModel>> {
        const idUser = '';
        return this.http.get<Array<CustomModel>>(environment.api + 'user/' + idUser + '/wishlist');
    }

    getById(wishId: string): Observable<CustomModel> {
        const userId = '';
        return this.http.get<CustomModel>(environment.api + 'user/' + userId + '/wishlist/' + wishId);
    }

    create(customId: string): Observable<CustomModel> {
        const userId = '';
        return this.http.post<CustomModel>(environment.api + 'user/' + userId + '/wishlist/', {customId, userId});
    }

    remove(customId: string): any {
        const userId = '';
        return this.http.delete(environment.api + 'user/' + userId + '/wishlist/' + customId);
    }
}
