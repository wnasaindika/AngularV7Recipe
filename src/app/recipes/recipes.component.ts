import { Component, OnInit } from '@angular/core';
import { Recipes } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

  recSelected: Recipes;
  constructor(private recippesService:RecipesService) { }

  ngOnInit() {
    this.recippesService.selectedRecipe.subscribe(
      (recipes:Recipes)=>{
        this.recSelected=recipes;
      }
    )
  }

}
