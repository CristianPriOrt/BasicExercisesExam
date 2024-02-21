import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-ex-exam',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './ex-exam.component.html',
  styleUrl: './ex-exam.component.css'
})
export class ExExamComponent {

  constructor() {
  }

  onlyNumber(e:KeyboardEvent){
    if(isNaN(Number(e.key))){
      e.preventDefault();
    }
  }

 newEmployee = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$")]),
    position: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    salary: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$"), Validators.max(10000)]),
    city: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$")]),
  });

  submitEmployee() {
    if(this.newEmployee.valid) {
      alert("Employee successfully submitted");
      let nameForm: any = document.getElementById("name");
      let positionForm: any = document.getElementById("position");
      let salaryForm: any = document.getElementById("salary");
      let cityForm: any = document.getElementById("city");
      nameForm.value = "";
      positionForm.value = "";
      salaryForm.value = "";
      cityForm.value = "";

      let employeeNumber = 1;

      while(localStorage.getItem("employee" + employeeNumber + "_name")) {
        employeeNumber++;
      }

      localStorage.setItem("employee" + employeeNumber + "_name", this.newEmployee.value.name ?? '');
      localStorage.setItem("employee" + employeeNumber + "_position", this.newEmployee.value.position ?? '');
      localStorage.setItem("employee" + employeeNumber + "_salary", this.newEmployee.value.salary ?? '');
      localStorage.setItem("employee" + employeeNumber + "_city", this.newEmployee.value.city ?? '');
    }else {
      alert("Invalid form");
    }
  }

  clearSubmittedEmployees() {
    localStorage.clear();
  }
}
