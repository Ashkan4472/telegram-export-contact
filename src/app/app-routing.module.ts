import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SelectionComponent } from './selection/selection.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'selection',
    component: SelectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
