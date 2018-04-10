import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Board } from '../board';
import { BoardService } from '../board.service';
import { List } from '../list';
import { ListService } from '../list.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.css'],
  providers: [ BoardService, ListService ]
})
export class BoardViewComponent implements OnInit{
  @Input() board: Board;
  currentRoute: string = this.router.url;

  boardId: string;
  boardToDisplay;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private boardService: BoardService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.boardId = urlParameters['id'];
    });
    this.boardToDisplay = this.boardService.getBoard(this.boardId); 
  }

  deleteBoard() {
    this.boardService.deleteBoard(this.boardId)
  }

  goToEditBoard(clickedBoard) {
    this.router.navigate(['edit-board', clickedBoard.$key]);
  };

}
