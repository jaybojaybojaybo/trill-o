import { Component, OnInit, Input } from '@angular/core';
import { Board } from '../board';
import { BoardService } from '../board.service';
import { List } from '../list';
import { ListService } from '../list.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers: [BoardService, ListService]
})
export class ListsComponent implements OnInit {
  @Input() boardForId: Board;
  currentRoute: string = this.router.url;
  public lists: FirebaseListObservable<List[]> = null;

  boardId: string;
  listId: string;
  listsToDisplay;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private boardService: BoardService,
    private listService: ListService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.boardId = urlParameters['id'];
    });
    this.lists = this.boardService.getListsList(this.boardId)
  }

  deleteList(list) {
    this.listService.deleteList(list.$key)
  }
}
