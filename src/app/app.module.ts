import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DepartmantFormComponent } from './departmant-form/departmant-form.component';
import { DepartmantListComponent } from './departmant-list/departmant-list.component';
import { DepartmantService } from './departmant.service';
import { UserService } from './user.service';
import { UserFormComponent } from "./user-form/user-form.component";



@NgModule({
  declarations: [
    AppComponent,
    DepartmantFormComponent,
    DepartmantListComponent,
    UserFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [DepartmantService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
