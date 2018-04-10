import { Component, OnInit, Input } from '@angular/core';
import { List } from '../list';
import { ListService } from '../list.service';
import { Card } from '../card';
import { CardService } from '../card.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: [ ListService, CardService]
})
export class CardsComponent implements OnInit {
  @Input() listForId: List;
  currentRoute: string = this.router.url;
  public cards: FirebaseListObservable<Card[]> = null;

  listId: string;
  cardId: string;
  cardsToDisplay;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listService: ListService,
    private cardService: CardService
  ) { }

  ngOnInit() {
    this.cards = this.listService.getCardsList(this.listForId.$key)
    // console.log("this is this.listId:" + this.listId);
    
  }

  deleteCard(card) {
    this.cardService.deleteCard(card.$key)
  }
}
