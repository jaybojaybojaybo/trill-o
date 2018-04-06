import { Injectable } from '@angular/core';
import { Board } from './board';
import { List } from './list';
import { ListService } from './list.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

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
    let boardsListsList = this.database.list('boards-lists'); //generates the boards-lists table associations boardId as key, listId as value
    let boardsListsRef = this.database.database.ref('boards-lists'); //this references the exact path of the boards-lists table
    console.log(boardsListsRef.toString());
    let listIds = []; //this will be the destination for all listIds that are retrieved from the following method.

    let keys = boardsListsRef.on('child_added', function(snapshot){
      listIds.push(snapshot.val());
      console.log(snapshot.val());
    });
    console.log("this is listIds: " +listIds); //this currently returns all objects in boards-lists - how to get the values?
    
    listIds.forEach(function(listId){
      let newList = this.listService.getListById(listId);
      this.lists.push(newList);
    })
    console.log("this is this.lists: " + this.lists);
    
    return this.lists;
  }
}
