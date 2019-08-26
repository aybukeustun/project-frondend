import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmantFormComponent } from './departmant-form/departmant-form.component';
import { DepartmantListComponent } from './departmant-list/departmant-list.component';



const routes: Routes = [
  { path: 'departmant', component: DepartmantListComponent },
  { path: 'adddepartmant', component: DepartmantFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
