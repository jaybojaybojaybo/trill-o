import { Injectable } from '@angular/core';
import { List } from './list';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class ListService {
  private basePath: string = '/lists';
  list: FirebaseObjectObservable<List> = null;
  lists: FirebaseListObservable<List[]> = null;

  constructor(private db: AngularFireDatabase) {
    this.lists = db.list('lists')
  }

  getListsList(query={}): FirebaseListObservable<List[]>{
    this.lists = this.db.list(this.basePath, {
      query: query
    });
    return this.lists
  }

  getList(key: string): FirebaseObjectObservable<List> {
    const listPath = `${this.basePath}/${key}`;
    this.list = this.db.object(listPath)
    return this.list
  }

  createList(list: List): void {
    this.lists.push(list)
  }

  updateList(list: List): void {
    this.lists.update(list.$key, {name: list.name})
  }

  deleteList(key: string): void {
    this.lists.remove(key)
  }

  deleteAllLists(): void {
    this.lists.remove()
  }
}

