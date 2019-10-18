import { Injectable } from '@angular/core';
import Axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async getUserDetail() {

    return await Axios.get('user/me');
  }
}
