import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { FormGroup, FormControl } from '@angular/forms/src/model';
import { Http, Headers, RequestOptions } from "@angular/http"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private http : Http, private route : Router) { }

  ngOnInit() {
  }

  salahpass
  emptyfield
  checkboxempty

  Signup(f:NgForm){

  if(f.value.pswrepeat==f.value.password && f.value.pswrepeat!=="" && f.value.password!=="" ){
      
    let obj = {
      name : f.value.name,
      username : f.value.username,
      password : f.value.password,

    }

    let header = new Headers ({"Content-Type" : "application/json"})
    let options = new RequestOptions({ headers : header})

    this.http.post("http://localhost:3000/api/user/new",obj,options)
    .subscribe(
      result => {
        this.route.navigate(['/login'])
      },
      error =>{
        console.log(error)
      }
    )
  }

  else if(f.value.pswrepeat!==f.value.password){
    console.log("error")
    this.salahpass = "Password doesn't match"
  }

  else if(f.value.pswrepeat=="" ||f.value.password=="" ||f.value.username==""){
    console.log("Field cannot be empty")
    this.emptyfield="Field cannot be empty"
  }

  else if(f.value.checkbox==false){
    console.log("checkbox not checked")
    this.checkboxempty="checkbox"
  }



}


}
