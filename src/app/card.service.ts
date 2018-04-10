import { Injectable } from '@angular/core';
import { Card } from './card';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Injectable()
export class CardService {
  private basePath: string = '/cards';
  card: FirebaseObjectObservable<Card> = null;
  cards: FirebaseListObservable<Card[]> = null;

  constructor(private db: AngularFireDatabase) {
    this.cards = db.list('cards')
   }

  getCardsList(query={}): FirebaseListObservable<Card[]> {
    this.cards = this.db.list(this.basePath, {
      query: query
    });
    return this.cards
  }

  getCard(key: string): FirebaseObjectObservable<Card> {
    const cardPath = `${this.basePath}/${key}`;
    this.card = this.db.object(cardPath)
    return this.card
  }

  createCard(card: Card): void {
    this.cards.push(card)
  }

  updateCard(card: Card): void {
    let cardEntryInFirebase = this.getCard(card.$key);
    cardEntryInFirebase.update({name: card.name})
  }

  deleteCard(key: string): void {
    this.cards.remove(key)
  }

  deleteAllCards(): void {
    this.cards.remove()
  }
}
