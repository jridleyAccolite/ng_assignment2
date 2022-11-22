import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounce, interval } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router){}

  user!:FormGroup;

  ngOnInit(){
    this.user = new FormGroup({
      username: new FormControl("",[Validators.required, Validators.minLength(5)]),
      email: new FormControl("", [Validators.email]),
      password: new FormControl("", [Validators.minLength(5)])
    });

    // this.user.valueChanges
    // .pipe(
    //   debounce( ()=> interval(500) ))
    //   .subscribe(data =>{
    //       console.log(this.user.get('password')?.valid);
    //   });
  }

  

  toLogin(){
    this.router.navigate(['login']);
  }
}
