import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductModel} from '../../models/Product';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Array<ProductModel>> {
        return this.http.get<Array<ProductModel>>(environment.api + 'product');
    }

    getById(id: string): Observable<ProductModel> {
        return this.http.get<ProductModel>(environment.api + 'product/' + id);
    }
}
