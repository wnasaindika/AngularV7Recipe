import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { RecipesDetialsComponent } from './recipes/recipes-detials/recipes-detials.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { appDropDownDirective } from './shared/shared.directive'
import { ShoppinglistService } from './shopping-list/shopping-list.service';
import { AppRouterModule } from './app.router.module';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesItemComponent,
    RecipesDetialsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    appDropDownDirective,
    RecipesStartComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [ShoppinglistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
