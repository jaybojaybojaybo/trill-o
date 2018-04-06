import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BoardsComponent } from './boards/boards.component';
import { BoardViewComponent } from './board-view/board-view.component';

const appRoutes: Routes = [
  { path: '',                  component: WelcomeComponent  },
  { path: 'board-view/:id',    component: BoardViewComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
