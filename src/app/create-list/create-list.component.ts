import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { List } from '../list';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent {

  list: List = new List();

  constructor(private listService: ListService) { }

  createList() {
    this.listService.createList(this.list)
    this.list = new List()
  }
}
