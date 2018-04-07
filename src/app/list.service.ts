import { Injectable } from '@angular/core';
import { List } from './list';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ListService {
  lists: FirebaseListObservable<any[]>;
  boardsLists: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.lists = database.list('lists'),
    this.boardsLists = database.list('boards-lists')
  }

  getLists(){
    return this.lists;
  }

  // addList(boardId: string, newList: List) {
  //   this.lists.push(newList);
  //   // let newBoardsListsItem = [{

  //   // }]
  //   this.boardsLists.push(newBoardsListsItem);
  // }

  getListById(listId: string){
    return this.database.object('lists/' + listId);
  }

  updateList(localUpdatedList){
    let listEntryInFirebase = this.getListById(localUpdatedList.$key);
    listEntryInFirebase.update({
      name: localUpdatedList.name,
    });
  }

  deleteList(localListToDelete){
    let listEntryInFirebase = this.getListById(localListToDelete.$key);
    listEntryInFirebase.remove();
  }
}

