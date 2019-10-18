import { Injectable } from '@angular/core';
import Axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class InstafeedService {

  constructor() { }

  getFeed(): any {
    return Axios.get('insta');
}
}
