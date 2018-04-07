import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BoardsComponent } from './boards/boards.component';
import { BoardViewComponent } from './board-view/board-view.component';
import { EditBoardComponent } from './edit-board/edit-board.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome',                  component: WelcomeComponent  },
  { path: 'board-view/:id',    component: BoardViewComponent},
  { path: 'edit-board/:id',    component: EditBoardComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
