import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {CustomModel} from '../../models/Custom';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor(private http: HttpClient) { }


   getAll(): any {
    return axios.get<Array<CustomModel>>(environment.api + 'custom');
  }

  getById(id: string): any {
    return axios.get<CustomModel>(environment.api + 'custom/' + id);
  }

  add(custom: CustomModel) {
    return axios.post(environment.api + 'custom', custom);
  }
}
