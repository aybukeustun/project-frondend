import { Component, OnInit } from '@angular/core';
import { Departmant } from '../departmant';
import { DepartmantService } from '../departmant.service';

@Component({
  selector: 'app-departmant-list',
  templateUrl: './departmant-list.component.html',
  styleUrls: ['./departmant-list.component.css']
})
export class DepartmantListComponent implements OnInit {
  
  departmant:Departmant[];
  
  constructor(private departmanService:DepartmantService) { }

  ngOnInit() {
    this.departmanService.findAll().subscribe(data => {
      this.departmant = data;
      console.log(this.departmant);
    });
  }

}
