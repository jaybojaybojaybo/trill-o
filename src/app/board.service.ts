import { Injectable } from '@angular/core';
import { Board } from './board';
import { List } from './list';
import { ListService } from './list.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

const db = AngularFireDatabase;

@Injectable()
export class BoardService {
  boards: FirebaseListObservable<any[]>;
  lists: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase, private listService: ListService) {
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


  //Lists Methods
  getLists(boardId: string){
    let boardsListsList = this.database.list('boards-lists/' + boardId); //generates the boards-lists table associations boardId as key, listId as value

    return boardsListsList;
  }
}
