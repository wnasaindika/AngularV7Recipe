import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingrdatiants } from '../../shared/shared.component';
import { ShoppinglistService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private slService:ShoppinglistService) { }

  ngOnInit() {
  }

  onItemAdd() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const ingradiant = new Ingrdatiants(name, amount);
    this.slService.addIngradiants(ingradiant);
  }
}
