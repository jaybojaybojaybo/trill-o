import { Injectable } from '@angular/core';
import { BoardsListsPair } from './boards-lists';
import { Board } from './board';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class BoardsListsService {
  private basePath: string = '/boards-lists';
  boardsListsPair: FirebaseObjectObservable<BoardsListsPair> = null;
  boardsListsPairs: FirebaseListObservable<BoardsListsPair[]> = null;
  board: FirebaseObjectObservable<Board> = null;

  constructor(private db: AngularFireDatabase) {
    this.boardsListsPairs = db.list('boards-lists')
  }

  createBoardsListsPair(boardsListsPair: BoardsListsPair) {
    this.boardsListsPairs.push(boardsListsPair)
  }

}
