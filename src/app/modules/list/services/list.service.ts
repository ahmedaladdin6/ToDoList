import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {

   url = environment.api_url;
  constructor(private http:HttpClient) { }

  getAllList(){
     return  this.http.get(`${this.url}/all-list`)
  }

  getListById(ID){
    return  this.http.get(`${this.url}/all-list/${ID}`)
  }

  addList(payload){
    return  this.http.post(`${this.url}/all-list`,payload)
  }

  editList(ID,payload){
    return  this.http.put(`${this.url}/all-list/${ID}`,payload)

  }

  deleteListById(ID){
    return  this.http.delete(`${this.url}/all-list/${ID}`)
  }
}
