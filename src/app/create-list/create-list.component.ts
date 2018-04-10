import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../list.service';
import { List } from '../list';
import { Board } from '../board';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css'],
  providers: [ ListService ]
})
export class CreateListComponent {
  @Input() boardForId: Board;
  list: List = new List();

  boardId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private listService: ListService,
  ) { }

  createList() {
    this.route.params.forEach((urlParameters) => {
      this.boardId = urlParameters['id'];
    });
    this.list.boardId = this.boardId;
    this.listService.createList(this.list)
    this.list = new List()
  }
}


