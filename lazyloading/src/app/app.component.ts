import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { UserlistComponent } from './userlist/userlist.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazyloading';
  constructor(private vcr:ViewContainerRef,private cfr:ComponentFactoryResolver){

  }
  async loadAdmin(){
    this.vcr.clear();
    //const {AdminListComponent}=await import('./adminlist/adminlist.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(AdminlistComponent)
    )

  }
  async loadUser(){
    this.vcr.clear();
    //const UserListComponent=await import('./adminlist/adminlist.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(UserlistComponent)
    )
  }
}
