import {Injectable} from '@angular/core';
import {CustomModel} from '../../models/Custom';
import Axios, {AxiosResponse} from 'axios';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor() {
    }

    getAll(): Promise<AxiosResponse<Array<CustomModel>>> {
        return Axios.get<Array<CustomModel>>('user/cart');
    }

    getById(wishId: string): Promise<AxiosResponse<CustomModel>> {
        return Axios.get<CustomModel>('user/cart/' + wishId);
    }

    create(customId: string): Promise<AxiosResponse<CustomModel>> {
        return Axios.post<CustomModel>('user/cart/', {custom_id: customId});
    }

    remove(customId: string): any {
        return Axios.delete('user/cart/' + customId);
    }
}
