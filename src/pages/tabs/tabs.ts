import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { GoalPage } from '../goal/goal';
import { BudgetPage } from '../budget/budget'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BudgetPage;
  tab3Root = GoalPage;

  constructor() {

  }
}
