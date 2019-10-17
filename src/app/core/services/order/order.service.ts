import { Injectable } from '@angular/core';
import Axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getOrder(userId: string): any {
    userId = '5da8d43d1c9d440000dd4268';
    return Axios.get('user/' + userId + '/order/');
  }

  createOrder(userId: string, customsIds) {
    userId = '5da8d43d1c9d440000dd4268';
    return Axios.post('user/' + userId + '/order/', {custom_id: customsIds});
  }
}
