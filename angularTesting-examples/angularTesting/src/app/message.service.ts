import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  getContent(): Observable<any> {

    const obs = {testAlert: 'you have been warned' };
    return of(obs);
  }

constructor() { }

}
