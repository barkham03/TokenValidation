import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/table';
import {DataService} from '../data/data.service';
import {Post} from '../Post';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private dataService: DataService) { }

  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  dataSource = new PostDataSource(this.dataService);
}

export class PostDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }
  connect(): Observable<Post[]> {
    console.log(this.dataService.getData());
    return(this.dataService.getData());
  }
  disconnect() {
  }
}
