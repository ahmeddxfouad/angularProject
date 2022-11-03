import {Ingredient} from "../shared/ingredient.module";
import {Subject} from "rxjs";

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient("apples",5),
    new Ingredient("tomatos",10)
  ];

  getIngredients()
  {
    return this.ingredients.slice();
  }
  getIngredient(index: number)
  {
    return this.ingredients[index];
  }

  addNewItem(item: Ingredient)
  {
    this.ingredients.push(item);
    this.ingredientsChanged.next(this.ingredients);
  }

  updateItem(index: number, ingredient: Ingredient){
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteItem(index: number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
