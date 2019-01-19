import { Component, OnInit } from '@angular/core';
import { listHero } from './list';
import { Hero } from '../entity/Hero';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent implements OnInit {
  list = listHero;
  id1="";
  name1="";
  valueSelect='all';
  constructor() {

   }
   hell : Hero;
   
   add (){
     // create parameter in function
      this.name1=(this.name1=="")?"NAN":this.name1;
      const herox:Hero={
      id: this.list.length+1,
        name: this.name1
           };
      // add object for list
    this.list.push(herox);
    // xoa luon text in input
    this.id1="";
    this.name1="";
   }
  ngOnInit() {
  }

  //  function have paramter ( truyen value thong qua parameter)
  delete(idx:Number) {
    // const x : khai bao bien trong delete
    // find index of  id in list 
    const index =Number(this.list.findIndex(object => object.id==idx));
    // xoa bat dau = index , 1 : count  ( xoa di bao nhieu phan tu)
    this.list.splice(index,1);
  }

}
