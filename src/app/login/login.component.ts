import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   name : string ='Login';
   
   constructor(private router :Router)
   {
    

   }
   submit()
   {
     this.router.navigate(['user']);
   }
  
  ngOnInit() {
  }

}
