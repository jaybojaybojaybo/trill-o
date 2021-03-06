import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BoardsComponent } from './boards/boards.component';
import { BoardService } from './board.service';
import { BoardViewComponent } from './board-view/board-view.component';
import { ListsComponent } from './lists/lists.component';
import { ListService } from './list.service';
import { CardsComponent } from './cards/cards.component';
import { CardService } from './card.service';

import { masterFirebaseConfig } from '../api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { routing } from './app.routing';

import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { EditBoardComponent } from './edit-board/edit-board.component';
import { CreateBoardComponent } from './create-board/create-board.component';
import { CreateListComponent } from './create-list/create-list.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { EditCardComponent } from './edit-card/edit-card.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    BoardsComponent,
    BoardViewComponent,
    ListsComponent,
    EditBoardComponent,
    CreateBoardComponent,
    CreateListComponent,
    EditListComponent,
    CardsComponent,
    CreateCardComponent,
    EditCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    routing,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [ BoardService, ListService, CardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
