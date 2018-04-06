import { Injectable } from '@angular/core';
import { Board } from './board';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BoardService {
  boards: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.boards = database.list('boards')
  }

  getBoards(){
    return this.boards;
  }

  addBoard(newBoard: Board) {
    this.boards.push(newBoard);
  }

  getBoardById(boardId: string){
    return this.database.object('boards/' + boardId);
  }

  updateBoard(localUpdatedBoard){
    let boardEntryInFirebase = this.getBoardById(localUpdatedBoard.$key);
    boardEntryInFirebase.update({
      name: localUpdatedBoard.name,
    });
  }

  deleteBoard(localBoardToDelete){
    let boardEntryInFirebase = this.getBoardById(localBoardToDelete.$key);
    boardEntryInFirebase.remove();
  }
}
