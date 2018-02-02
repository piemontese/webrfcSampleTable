import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataTableComponent } from './components/commons/data-table/data-table.component';

const routes: Routes = [
/*
  {
    path: '', component: DataTableComponent,
    children: []
  },
  {
    path: 'data-table', component: DataTableComponent,
    children: []
  },
*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
