import { Injectable } from '@angular/core';
import { List } from './list';
import { Card } from './card';
import { CardService } from './card.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class ListService {
  private basePath: string = '/lists';
  private cardPath: string = '/cards';

  list: FirebaseObjectObservable<List> = null;
  lists: FirebaseListObservable<List[]> = null;
  card: FirebaseObjectObservable<Card> = null;
  cards: FirebaseListObservable<Card[]> = null;

  constructor(private db: AngularFireDatabase) {
    this.lists = db.list('lists'),
    this.cards = db.list('cards')
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

  updateList(list): void {
    let listEntryInFirebase = this.getList(list.$key);
    listEntryInFirebase.update({name: list.name})
  }

  deleteList(key: string): void {
    this.lists.remove(key)
  }

  deleteAllLists(): void {
    this.lists.remove()
  }

  //Cards Methods
  getCardsList(listFilter): FirebaseListObservable<Card[]>{
    this.cards = this.db.list(this.cardPath, {
      query: {
        orderByChild: 'listId',
        equalTo: listFilter
      }
    });
    return this.cards
  }
}
