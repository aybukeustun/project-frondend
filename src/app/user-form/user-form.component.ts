import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent  {

  user:User;
  
  user_name;
  password;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    //this.departmant = new Departmant();

  }
  onSubmit() {
    this.user = new User(this.user_name,this.password);
    console.log(this.user);
  
    this.userService.login(this.user).subscribe(data => {this.user = data;
      console.log(this.user);
    });
  }
  gotoUserList() {
    this.router.navigate(['/']);
  }

  

}
