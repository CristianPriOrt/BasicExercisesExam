import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-ex07',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './ex07.component.html'
})
export class Ex07Component {
  numbers: number[] = [];
  fruits: string[] = [];
  fruitsInput = document.getElementById("fruitsInput");

  constructor() { }

  ngOnInit(): void {
    this.numbers = [1, 5, 8, 24, 32, 11, 55];
    this.numbers.sort((a, b) => a - b);
    this.fruits = ["pear", "apple", "mango", "watermelon", "kiwi"];
    this.fruits.sort((a, b) => a.localeCompare(b));
  }
}
