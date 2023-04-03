import { Component } from '@angular/core';
import { DemoService } from 'src/app/demo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[DemoService]
})
export class LoginComponent {
  constructor(private name:DemoService){

  }
  title="from another module"
  ngOnInit(){
    this.title=this.name.getName("This is from another modue service consumption")
  }
}
