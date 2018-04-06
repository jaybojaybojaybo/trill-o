import { Injectable } from '@angular/core';
import { List } from './list';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ListService {
  lists: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.lists = database.list('lists')
  }

  getLists(){
    return this.lists;
  }

  addList(newList: List) {
    this.lists.push(newList);
  }

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

