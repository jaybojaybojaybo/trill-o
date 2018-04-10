import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';
import { Board } from '../board';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css'],
  providers: [ ]
})
export class CreateBoardComponent {

  board: Board = new Board();

  constructor(private boardService: BoardService) { }

  createBoard() {
    this.boardService.createBoard(this.board)
    this.board = new Board()
  }
}
