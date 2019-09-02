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
  deger:Boolean;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    //this.departmant = new Departmant();

  }
  onSubmit() {
  
    this.user = new User(this.kullanici_adi,this.parola);
    console.log(this.user);
  
    this.userService.login(this.user).subscribe(data => {this.user = data;
      console.log(this.user);
      
      if(this.kullanici_adi == this.user.kullanici_adi ){
        sessionStorage.setItem('kullanici_adi', this.user.kullanici_adi)
        this.deger=true;       
         this.router.navigate(["departmant"]);


       }else {
         this.deger=false;
         alert("hatalı giris");
       }
       return this.deger;
       
    });
    
   
  

  }
  isUserLoggedIn() {
    let kullanici_adi = sessionStorage.getItem('kullanici_adi')
    console.log(!(this.kullanici_adi == null));
    return !(kullanici_adi == null);
  }
  
  
  
  gotoUserList() {
    this.router.navigate(['/']);
  }

  

}
