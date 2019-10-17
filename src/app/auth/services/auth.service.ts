import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {User} from '../models/user';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import Axios from 'axios';
import {UserService} from '../../core/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = new BehaviorSubject(false);

  private user = new BehaviorSubject<User>(null);

  constructor(private httpClient: HttpClient, private storage: Storage, private userService: UserService) { }

  async login(user: User) {

    const response = await Axios.post('auth/login', user);

    if (response.data.jwt) {

      this.isLogged.next(true);
      await this.storage.set('JWT_TOKEN', response.data.jwt);

      const userDetail = await this.userService.getUserDetail();

      this.user.next(userDetail.data as User);

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

  get userDetail(): User {
    return this.user.getValue();
  }
}
