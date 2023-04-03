import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DemoService } from './demo.service';
import { UserData } from './user-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DemoService]
})
export class AppComponent {
  title = 'services';
  userData:UserData[]=[]
  constructor(private demo:DemoService){

  }
  userObject:UserData ={
    "id":0,
    "first_name": "",
    "last_name": "",
    "email": "",
    "gender": ""
  }
  globalData:UserData[]=[]
  ngOnInit(){
    this.demo.getData().subscribe((data:UserData[])=>{
      console.log(data);
      this.userData=data
      this.globalData=data
    })
    //this.title=this.demo.getName("cooming from parent service")
  }
  firstNameFilter:string=""
  filterData(){
    let temp:UserData[]=[]
    temp=this.globalData.filter((obj:any)=>{
      if(obj.first_name?.includes(this.firstNameFilter)){
        return obj;
      }
    })
    this.userData=temp
  }
  saveData(){
    //console.log(this.userObject);
    let flag:boolean=false;
    this.globalData.forEach((obj)=>{
      if(obj.id===this.userObject.id){
        console.log("data there");
        flag=true;
      }
    })
    if(flag){
      this.demo.editData(this.userObject).subscribe((data)=>{
        console.log(data);
        this.demo.getData().subscribe((data:UserData[])=>{
          this.globalData=data
        this.userData=data
        })
        
      })

    }else{
      this.demo.saveData(this.userObject).subscribe((data:any)=>{
        console.log(data);
        this.demo.getData().subscribe((data:UserData[])=>{
          this.globalData=data
        this.userData=data
        })
      })

    }

    
    
  }
  editData(id:any){
    console.log(id);
    this.demo.getDataById(id).subscribe((data:UserData)=>{
      this.userObject=data;
    })
    
  }
  deleteData(id:any){
    this.demo.deleteDataById(id).subscribe((data:any)=>{
      console.log(data);
      this.demo.getData().subscribe((data:any)=>{
        console.log(data);
        this.globalData=data
        this.userData=data
      })
      
    })
    
  }
  
  
  
}
