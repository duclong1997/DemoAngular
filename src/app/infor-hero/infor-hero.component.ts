import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {listHero} from '../list-hero/list';
import { Hero } from '../entity/Hero';
@Component({
  selector: 'app-infor-hero',
  templateUrl: './infor-hero.component.html',
  styleUrls: ['./infor-hero.component.css']
})
export class InforHeroComponent implements OnInit {

  constructor(private route :ActivatedRoute, private local : Location) { }

  // run the first in program when call
  ngOnInit() {
    this.getHero();
  }
  id1: Number;
  list =listHero;
  hero1 :Hero;
  getHero(){
    // +: convert from String to number 
    // get value from parameter in router
    this.id1= +this.route.snapshot.paramMap.get('id');
    // find the element in array
    this.hero1= this.list.find(object => object.id==this.id1);
    
  }
  goBack(){
    // call back 
    this.local.back();
  }
}
