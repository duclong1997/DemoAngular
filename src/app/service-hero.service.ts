import { Injectable } from '@angular/core';
import {Hero} from './entity/Hero';
import { listHero} from './list-hero/list'

@Injectable({
  providedIn: 'root'
})

export class ServiceHeroService {

  // function return -> list
  getListhero(): Hero[]{
    return listHero;
  } 

  // create contructor with java script
  constructor( private hero : Hero) {

  }
}
