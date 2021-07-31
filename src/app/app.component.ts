import { Component } from '@angular/core';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconDefinition, IconName } from '@fortawesome/fontawesome-svg-core';
import {
  faBell 
} from '@fortawesome/free-solid-svg-icons';
import {
  trigger,state,style,animate,transition,

} from '@angular/animations';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [  
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        width:'200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '50px',
        width:'50px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class AppComponent {
  faBell=faBell
  isOpen=true;
  name = new FormControl('');
  nameValue=''
  wel:any=false
  word='Hi Welcom its'

  form:FormGroup
  constructor(private fb: FormBuilder,) {}
createForm(){
  this.form = this.fb.group({
    
  });
}
  toggle() {
    this.isOpen = !this.isOpen;
    this.nameValue=this.name.value
    this.wel=true;
    this.wel=this.word
    
    
  }


}
