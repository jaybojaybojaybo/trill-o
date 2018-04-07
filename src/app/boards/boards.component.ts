import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { BoardService } from '../board.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css'],
  providers: [ BoardService ]
})
export class BoardsComponent implements OnInit {
  public boards: FirebaseListObservable<Board[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private boardService: BoardService) { }

  ngOnInit() {
    this.boards = this.boardService.getBoardsList();
  }

  goToBoardView(clickedBoard) {
    this.router.navigate(['board-view', clickedBoard.$key]);
  };

  // addBoard(name: string){
  //   let newBoard: Board = new Board();
  //   this.boardService.createBoard(newBoard);
  // }

  deleteBoards() {
    this.boardService.deleteAllBoards()
  }
}
