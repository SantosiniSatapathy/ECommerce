import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpServiceService {

  constructor(private http:HttpClient) { }

  get(){
    console.log("http service");
  }
}
