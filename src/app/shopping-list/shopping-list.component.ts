import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.module";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("apples",5),
    new Ingredient("tomatos",10)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(item: Ingredient)
  {
    this.ingredients.push(item);
  }

}
