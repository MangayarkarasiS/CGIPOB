import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { allPeople } from '../people';

@Injectable({
  providedIn: 'root'
})
export class PeopleHttpService {
 baseUrl="http://localhost:3000/peoples";

  constructor(private httpClient:HttpClient) { }

  getAllpeoples():Observable<allPeople[]>{
    return this.httpClient.get<allPeople[]>(this.baseUrl);
  }

  getApeople(pId:any):Observable<allPeople>{
    return this.httpClient.get<allPeople>(this.baseUrl+'/'+pId);
  } 
 
   
  updatePeople(alPeople:allPeople):Observable<allPeople>{
    return this.httpClient.put<allPeople>(this.baseUrl+'/'+alPeople.id,alPeople);
  }

  deletePeople(pId:number):Observable<void>{
    return this.httpClient.delete<void>(this.baseUrl+'/'+pId);
  }
}
