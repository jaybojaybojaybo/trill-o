import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Card } from '../card';
import { CardService } from '../card.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css'],
  providers: [ CardService ]
})
export class EditCardComponent {
  @Input() card: Card;
  currentRoute: string = this.router.url;

  cardId: string;
  cardToDisply;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private cardService: CardService,
  ) { }

  updateCard(card) {
    this.cardService.updateCard(card);
  }

  deleteCard(card) {
    this.cardService.deleteCard(card.$key)
  }

}
