import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http:HttpClient) { 
    
  }
  getName(input:string):string{
    return input;
  }
 
  dataUrl="http://localhost:3000/data"
  getData():Observable<UserData[]>{
    return this.http.get<UserData[]>(this.dataUrl);
  }
  saveData(obj:UserData){
    return this.http.post<UserData>(this.dataUrl,obj);
  }
  getDataById(id:number){
    //http://localhost:3000/data/2
    return this.http.get<UserData>(this.dataUrl+"/"+id);
  }
  editData(obj:UserData){
    return this.http.put<UserData>(this.dataUrl+"/"+obj.id,obj)
  }
  deleteDataById(id:number){
    return this.http.delete<UserData>(this.dataUrl+"/"+id);
  }
}
