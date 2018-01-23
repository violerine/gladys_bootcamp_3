import { Component, OnInit } from '@angular/core';
import {Http, RequestOptions, Headers } from "@angular/http"
import { NgForm } from "@angular/forms"
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http : Http, private router : Router) { }

  ngOnInit() {
  }

  emptyfield
  
  
  Login(f : NgForm){

    if(f.value.username=="" || f.value.password==""){
      console.log("emptyfield")
      this.emptyfield ="Field cannot be empty"
    }

    else{

    let obj = {
      username : f.value.username,
      password : f.value.password
    }

    let header = new Headers ({ "Content-Type" : "application/json"})
    let options = new RequestOptions({headers : header})

    this.http.post("http://localhost:3000/api/user/login",obj,options)
    .subscribe(
      result=>{
        sessionStorage.setItem("token",result.json().token)
        this.router.navigate(['/'])
      },
      error =>{
        console.log("user not found")
      }
    )
  }
}


}
