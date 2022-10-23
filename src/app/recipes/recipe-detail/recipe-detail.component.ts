import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  id !: number;
  constructor(private slService: ShoppingListService,
              private rService: RecipeService,
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
      (params: Params ) => {
        this.id = +params['id'];
        this.recipe = this.rService.getRecipe(this.id);

      })
  }

  addToShoppingList()
  {
    this.recipe.ingredients.map( (ingredient) => {
        return(
          this.slService.addNewItem(ingredient)
        )
      }

    )

  }

  onEditRecipe() {
    this.router.navigate(['edit'],{relativeTo: this.route})
  }

}
