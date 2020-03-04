import { Beverage } from './../beverage';
import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-select-beverage',
  templateUrl: './select-beverage.component.html',
  styleUrls: ['./select-beverage.component.css']
})
export class SelectBeverageComponent implements OnInit {
  @Output() sendData = new EventEmitter<object>();
  beverages: Beverage[];
  selectedBeverage: Beverage;
  cocktailName;

  constructor(private visitorService: VisitorService) {
  }
  ngOnInit(): void {
    this.getBeverages();
  }

  onSelect(beverage:Beverage): void{
    this.visitorService.setLastDrink(beverage);
    this.selectedBeverage = beverage;
    this.sendData.emit(beverage);
  }
  getBeverages():void{
    this.beverages = this.visitorService.getDrinkList();
  }
  addCocktail(){
    let newCocktail = {
      name:this.cocktailName,
    }
    this.beverages.push(newCocktail);
    this.visitorService.setDrinkList(this.beverages);
    
  }

}
