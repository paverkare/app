import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {CustomModel} from '../../models/Custom';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Array<CustomModel>> {
    return this.http.get<Array<CustomModel>>(environment.api + 'custom');
  }

  getById(id: string): Observable<CustomModel> {
    return this.http.get<CustomModel>(environment.api + 'custom/' + id);
  }
}
