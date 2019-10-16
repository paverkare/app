import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {User} from '../models/user';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient, private storage: Storage) { }

  login(user: User) {

    return this.httpClient.post(environment.api + '/api/auth/login', user).pipe(tap( async (response: any) => {
      console.log(response);
      if (response.jwt) {

        this.isLogged.next(true);
        await this.storage.set('JWT_TOKEN', response.jwt);
      }
    }));
  }

  isLog(): boolean {

    return this.isLogged.getValue();
  }
}
