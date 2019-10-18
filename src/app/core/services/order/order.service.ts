import { Injectable } from '@angular/core';
import Axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getOrder(): any {
    return Axios.get('user/order/');
  }

  createOrder(customsIds) {
    return Axios.post('user/order/', {custom_id: customsIds});
  }
}
