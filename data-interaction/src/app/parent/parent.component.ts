import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  name:string=""
  eventsSubject: Subject<string> = new Subject<string>();

emitEventToChild() {
  this.eventsSubject.next(this.name);
}
  
  

  
}
