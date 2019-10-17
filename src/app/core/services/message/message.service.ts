import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    private listener = new Subject<any>();

    listen(): Observable<any> {
        return this.listener.asObservable();
    }

    emit(filterBy: string) {
      console.log('bastien le ...');
        this.listener.next(filterBy);
    }
}
