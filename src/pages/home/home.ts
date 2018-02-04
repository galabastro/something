import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  personal:number = 50;
  transactionStack:number[];
  canEdit:boolean;

  constructor(public navCtrl: NavController) {
    this.transactionStack = [];
    this.canEdit = false;
  }

  remove(amount:number) {
    this.personal -= amount;
    this.transactionStack.push(amount);
    console.log(this.personal);
  }

  undo() {
    if (this.transactionStack.length > 0) {
      let undoAmount:number = this.transactionStack.pop();
      this.personal += undoAmount; 
    }
  }

  openEdit() {
    this.canEdit = !this.canEdit;
  }
}
