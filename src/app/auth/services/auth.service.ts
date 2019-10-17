import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {User} from '../models/user';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import Axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient, private storage: Storage) { }

  async login(user: User) {

    const response = await Axios.post('auth/login', user);

    if (response.data.jwt) {

      this.isLogged.next(true);
      await this.storage.set('JWT_TOKEN', response.data.jwt);

      return response.data;
    }

    return null;
  }

  async getJwt(): Promise<string> {

      return await this.storage.get('JWT_TOKEN');
  }

  isLog(): boolean {

    return this.isLogged.getValue();
  }
}
