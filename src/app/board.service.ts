import { Injectable } from '@angular/core';
import { Board } from './board';
import { List } from './list';
import { ListService } from './list.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Injectable()
export class BoardService {
  private basePath: string = '/boards';

  boards: FirebaseListObservable<Board[]> = null;
  board: FirebaseObjectObservable<Board> = null;
  lists: FirebaseListObservable<List[]>;
  list: FirebaseObjectObservable<List>;

  constructor(private db: AngularFireDatabase, private listService: ListService) {
    this.boards = db.list('boards'),
    this.lists = db.list('lists')
  }

  //angularfirebase.com tutorial info
  getBoardsList(query={}): FirebaseListObservable<Board[]> {
    this.boards = this.db.list(this.basePath, {
      query: query
    });
    return this.boards
  }

  getBoard(key: string): FirebaseObjectObservable<Board> {
    const boardPath = `${this.basePath}/${key}`;
    this.board = this.db.object(boardPath)
    return this.board
  }

  createBoard(board: Board): void {
    this.boards.push(board)
  }

  updateBoard(board: Board): void {
    this.boards.update(board.$key, {name: board.name})
  }

  deleteBoard(key: string): void {
    this.boards.remove(key)
  }

  deleteAllBoards(): void {
    this.boards.remove()
  }

  //Lists Methods
  getLists(boardId: string){
    let lists = this.db.list('boards-lists/' + boardId); //generates the boards-lists table associations boardId as key, listId as value
    return lists;
  }

  addList(newList: List){
    this.lists.push(newList);
  }
}
