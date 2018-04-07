import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Board } from '../board';
import { BoardService } from '../board.service';
import { List } from '../list';
import { ListService } from '../list.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-edit-board',
  templateUrl: './edit-board.component.html',
  styleUrls: ['./edit-board.component.css'],
  providers: [ BoardService, ListService ]
})
export class EditBoardComponent implements OnInit{
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
    // console.log(this.boardToDisplay);
    console.log(this.boardId);
  }

  updateName(string){
    this.boardService.updateBoard(this.board.$key, {name: string});
  }
}

