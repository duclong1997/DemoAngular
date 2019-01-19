import { Component, OnInit } from '@angular/core';
//  import class entity
//  import class from file 
import {Hero} from '../entity/Hero'
@Component({
  // create selector for web 
  selector: 'app-show',
  // set html for component
  templateUrl: './show.component.html',
  // set css for html
  styleUrls: ['./show.component.css']
})
// set class for component
export class ShowComponent implements OnInit {
  image ='https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  constructor() { }

  // set event for component 
  ngOnInit() {
  }
   light='assets/img/light_on.png';
   check = true;
   values ="turn on"
  // set function 
  goInput(){
    if(this.check){
    this.light="assets/img/light_off.png"
    this.values="turn off"
    this.check=false;
    }
    else{
      this.light="../assets/img/light_on.png"
      this.values="turn on"
      this.check=true;
    }
  }
  //  khai bao object 
  hero1 : Hero= {
    id :1,
    name:'long',
  };
    exchange=0;
  exchangvalue( event){
    this.exchange=this.exchange+Number(event);
  }

}
