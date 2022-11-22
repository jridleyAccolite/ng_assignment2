import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounce, interval } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  constructor(private router: Router, private userService: UserService){}

  user!:FormGroup;

  ngOnInit(): void {
    
    console.log("login page user logged in " + this.userService.isLoggedIn());

    this.user = new FormGroup({
      username: new FormControl("",[Validators.required]), 
      password: new FormControl('',[Validators.required])
    });

  // this.user.valueChanges
  //   .pipe(
  //     debounce(()=> interval(500))
  //   )
  //   .subscribe((data)=>{
  //     console.log(this.user.valid);
  //   });
   }

   login_user(){
    //console.log("logged in");
    this.userService.login();
    this.router.navigate(['home']);
   }

   toRegister(){
    this.router.navigate(['register']);
   }
}
