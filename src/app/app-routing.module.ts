import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmantFormComponent } from './departmant-form/departmant-form.component';
import { DepartmantListComponent } from './departmant-list/departmant-list.component';
import { UserFormComponent } from './user-form/user-form.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'departmant', component: DepartmantListComponent },
  { path: 'adddepartmant', component: DepartmantFormComponent },
  { path: 'login', component: UserFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
