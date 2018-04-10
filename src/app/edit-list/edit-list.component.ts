import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Board } from '../board';
import { BoardService } from '../board.service';
import { List } from '../list';
import { ListService } from '../list.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css'],
  providers: [ BoardService, ListService]
})
export class EditListComponent implements OnInit {
  @Input() list: List;
  currentRoute: string = this.router.url;

  listId: string;
  listToDisplay

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private boardService: BoardService,
    private listService: ListService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.listId = urlParameters['id'];
    });
    this.listToDisplay = this.listService.getList(this.listId);
  }

  updateList(selectedList){
    this.listService.updateList(selectedList);
    console.log(selectedList.name)
  }

  onSubmit(listForm: NgForm) {
    if (listForm.value.$key == null)
      this.listService.createList(listForm.value);
    else
      this.listService.updateList(listForm.value);
  }

  resetForm(listForm?: NgForm) {
    if (listForm != null)
      listForm.reset();
  }
}
