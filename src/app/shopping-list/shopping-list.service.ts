import {Ingredient} from "../shared/ingredient.module";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("apples",5),
    new Ingredient("tomatos",10)
  ];

  getIngredients()
  {
    return this.ingredients.slice();
  }

  addNewItem(item: Ingredient)
  {
    this.ingredients.push(item);
    this.ingredientsChanged.emit(this.ingredients);
  }
}
