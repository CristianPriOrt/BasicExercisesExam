import { Component } from '@angular/core';
import {EMPLOYEE_LIST} from "../employee-list";
import {NgForOf} from "@angular/common";

import {Employee} from "../Employee";

@Component({
  selector: 'app-ex09',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './ex09.component.html'
})
export class Ex09Component {
  employees: Employee[] = [];

  constructor() { }

  ngOnInit(): void {
    // let order = EMPLOYEE_LIST.slice().sort((a, b) => a.name.localeCompare(b.name));
    this.employees = EMPLOYEE_LIST;

    let employeeNumber = 1;

    while(localStorage.getItem("employee" + employeeNumber + "_name")) {
      let name: string = localStorage.getItem("employee" + employeeNumber + "_name") ?? '';
      let position: string = localStorage.getItem("employee" + employeeNumber + "_position") ?? '';
      let salary: number = Number(localStorage.getItem("employee" + employeeNumber + "_salary") ?? '');
      let city: string = localStorage.getItem("employee" + employeeNumber + "_city") ?? '';

      this.employees.push({name, position, salary, city})

      employeeNumber++;
    }
  }

  orderBy(order: string) {
    if(order === "name") {
      this.employees = this.employees.slice().sort((a, b) => a.name.localeCompare(b.name));
    }else if (order === "position") {
      this.employees = this.employees.slice().sort((a, b) => a.position.localeCompare(b.position));
    }else if (order === "salary") {
      this.employees = this.employees.slice().sort((a, b) => a.salary - b.salary);
    }else if (order === "city") {
      this.employees = this.employees.slice().sort((a, b) => a.city.localeCompare(b.city));
    }
  }
}
