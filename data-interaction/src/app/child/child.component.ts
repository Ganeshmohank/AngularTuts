import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // @Input() id?:any;
  private eventsSubscription?: Subscription;

@Input() events?: Observable<string>;
childName:string=""
ngOnInit(){
  this.eventsSubscription = this.events?.subscribe((data) => {
    console.log(data);
    this.childName=data
  });
}

ngOnDestroy() {
  this.eventsSubscription?.unsubscribe();
}
}
