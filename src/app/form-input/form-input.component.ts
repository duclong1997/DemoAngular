import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  name='';
  constructor() { }

  // get value from component show
  @Input() xval;
  // khai bao event  of component cha
  @Output() nameEvent =new EventEmitter();

  ngOnInit() {
  }
  // event1 : parameter co the thay doi
  inputvalue(event1)
  {
    // viet dung target.value
    // set value from <input>
    // truyen value thong qua event
    this.name= event1.target.value;
    // call event   component cha (show) 
    this.nameEvent.emit(this.name);
  }


}
