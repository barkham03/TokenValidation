import { Injectable } from '@angular/core';
import {Post} from '../Post';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  ELEMENT_DATA: Post[] = [
    {position: 0, title: 'Post One', category: 'Web Development', date_posted: new Date(), body: 'Body 1'},
    {position: 1, title: 'Post Two', category: 'Anroid Development', date_posted: new Date(), body: 'Body 2'},
    {position: 1, title: 'Post Three', category: 'IOS Development', date_posted: new Date(), body: 'Body 2'},
    {position: 1, title: 'Post Four', category: 'Web Development', date_posted: new Date(), body: 'Body 2'},
    {position: 1, title: 'Post Five', category: 'Anroid Development', date_posted: new Date(), body: 'Body 2'}
  ];
  constructor() {
  }
    getData(): Observable<Post[]> {
      return of<Post[]>(this.ELEMENT_DATA);
  }
}
