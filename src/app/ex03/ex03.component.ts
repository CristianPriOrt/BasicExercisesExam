import { Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-ex03',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './ex03.component.html',
  styleUrl: './ex03.component.css'
})
export class Ex03Component {
  n: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.n = Math.floor(Math.random() * 10 + 1);
  }
}
