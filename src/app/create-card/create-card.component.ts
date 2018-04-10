import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../list.service';
import { List } from '../list';
import { CardService } from '../card.service';
import { Card } from '../card';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css'],
  providers: [ CardService, ListService ]
})
export class CreateCardComponent {
  @Input() listForId: List;
  card: Card = new Card();

  listId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cardService: CardService
  ) { }

  createCard() {    
    this.listId = this.listForId.$key;
    console.log(this.listId);
    
    this.card.listId = this.listId;
    this.cardService.createCard(this.card)
    this.card = new Card()
  }

}
