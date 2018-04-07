import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { BoardService } from '../board.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [BoardService]
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  boardsCollapsed = true;

  boards: FirebaseListObservable<any[]>;

  constructor(private router: Router, private boardService: BoardService) { }

  ngOnInit() {
    this.boards = this.boardService.getBoardsList();
  }

  goToBoardView(clickedBoard) {
    this.router.navigate(['board-view', clickedBoard.$key]);
  };

}
