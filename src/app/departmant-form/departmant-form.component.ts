import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmantService } from '../departmant.service';
import { Departmant } from '../departmant';

@Component({
  selector: 'app-departmant-form',
  templateUrl: './departmant-form.component.html',
  styleUrls: ['./departmant-form.component.css']
})
export class DepartmantFormComponent {
  departmant: Departmant;

  departmant_id;
  component_id;
  constructor(private route: ActivatedRoute, private router: Router, private departmantService: DepartmantService) {
    //this.departmant = new Departmant();
  }
  onSubmit() {
    this.departmant = new Departmant(this.component_id,this.departmant_id);
    console.log(this.departmant);
    this.departmantService.save(this.departmant).subscribe(result => this.gotoUserList());
  }
  gotoUserList() {
    this.router.navigate(['/departmant']);
  }



}
