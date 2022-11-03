import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {RecipesComponent} from "../recipes.component";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode: Boolean = false;
  recipeForm !: FormGroup;
  editRecipe!: Recipe;


  constructor(private route:ActivatedRoute,
              private recipeServiece: RecipeService,
              private router : Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) =>{
          this.id = +params['id'];
          this.editMode= params['id'] != null;
          this.initForm();
        }

      )
  }

  getControls(){
    console.log(  this.recipeForm.get('ingredients')?.value)
    // @ts-ignore
    return ( this.recipeForm.get('ingredients').value);
  }

  onSubmit(){
    console.log(this.editRecipe);
    if(this.editMode){
      this.recipeServiece.updateRecipe(this.id,this.recipeForm.value);

    }
    else {
      this.recipeServiece.addRecipe(this.recipeForm.value);
    }

    this.onCancel();
  }

  initForm () {
      let recipeName= "";
      let recipeImageUrl = "";
      let recipeDescription ="";
      let recipeIngredients= new FormArray<FormGroup>([]);

      if(this.editMode)
      {
        const recipe = this.recipeServiece.getRecipe(this.id);
        recipeName = recipe.name;
        recipeImageUrl = recipe.imagePath;
        recipeDescription = recipe.description;
        if(recipe['ingredients']){
          for( let ingredient of recipe.ingredients) {
              recipeIngredients.push(
                new FormGroup({
                  'name' : new FormControl(ingredient.name, Validators.required),
                  'amount' : new FormControl(ingredient.amount, [
                    Validators.required,
                    Validators.pattern(/^[1-9]+[0+9]*$/)
                  ])
                })
              );
          }
        }
      }


    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName, Validators.required),
      'imagePath' : new FormControl(recipeImageUrl, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients' : recipeIngredients
    })
  }

  onCancel(){
    this.router.navigate(["../"], {relativeTo: this.route})
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
