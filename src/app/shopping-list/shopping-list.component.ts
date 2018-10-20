import { Component, OnInit } from '@angular/core';
import { Ingrdatiants } from '../shared/shared.component';
import { ShoppinglistService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  //test
  ingradiants: Ingrdatiants[];

  constructor(private shoppingList: ShoppinglistService) { }

  ngOnInit() {
    this.ingradiants = this.shoppingList.getIngradiants();
    this.shoppingList.ingradiantChange.subscribe(
      (ingradiant: Ingrdatiants[])=>{
        this.ingradiants = ingradiant;
      }
    );
  }

}
