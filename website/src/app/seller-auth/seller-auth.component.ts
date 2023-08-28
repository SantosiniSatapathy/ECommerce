import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpServiceService } from '../services/http-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// Import the necessary functions from RxJS
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showlogin: boolean = false ;


  constructor( private http:HttpClient , private router:Router){
    console.log("mamali");

  }


  ngOnInit() {
    console.log("santosini");

  }


  signup(data:object)
  {
    this.router.navigate(["seller-home"])
    console.log(data)
    // this.http.post("http://localhost:3000/signup" , data ).subscribe((res:any) =>{
    //    console.log(res);
    // })
  }



  openForms(data: string){
   if(data == "login")
   {
    this.showlogin = true;
   }
   else {
    this.showlogin = false;
   }
  }



  login(data:any){
    console.log(data);

  }
}
