import { Injectable } from '@angular/core';
import {  Beverage } from './beverage';
import { DRINKS } from './drinks';


@Injectable({
  providedIn: 'root'
})
export class VisitorService {
  getDrinks(): Beverage[]{
    return DRINKS;
  }
  getFirstName(){
    return localStorage.getItem('firstname');
  }
  getLastName(){
    return localStorage.getItem('lastname');
  }
  setName(firstname,lastname):void{
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('lastname', lastname);
  }
  getLastDrink(){
    return localStorage.getItem('lastdrink');
  }
  setLastDrink(drink): void {
    localStorage.setItem('lastdrink', drink.name);
  }
  removeInfo():void{
    localStorage.clear();
  }
    
  
  constructor() { }
}
