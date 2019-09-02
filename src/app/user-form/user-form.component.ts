import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent  {  
  user:User;
  kullanici_adi;
  parola;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    //this.departmant = new Departmant();

  }
  onSubmit() {
  
    this.user = new User(this.kullanici_adi,this.parola);
    console.log(this.user);
  
    this.userService.login(this.user).subscribe(data => {this.user = data;
      console.log(this.user);
      if(this.kullanici_adi == this.user.kullanici_adi ){
        this.router.navigate(["departmant"]);
       }else {
         alert("hatalı giris");
       }
    });
  

  }
  
  
  
  gotoUserList() {
    this.router.navigate(['/']);
  }

  

}
