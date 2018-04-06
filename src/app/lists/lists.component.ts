import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { BoardService } from '../board.service';
import { List } from '../list';
import { ListService } from '../list.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers: [BoardService, ListService]
})
export class ListsComponent implements OnInit {
  boardId: string;
  listsToDisplay;
  lists: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private boardService: BoardService, 
    private listService: ListService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.boardId = urlParameters['id'];
    });
    this.lists = this.boardService.getLists(this.boardId); 
    for(let list in this.lists){
      console.log(list);
    }   
  }

}
