import { Routes } from '@angular/router';
import { Ex01Component } from "./ex01/ex01.component";
import { Ex02Component } from "./ex02/ex02.component";
import { Ex03Component } from "./ex03/ex03.component";
import { Ex04Component } from "./ex04/ex04.component";
import { Ex05Component } from "./ex05/ex05.component";
import { Ex06Component } from "./ex06/ex06.component";
import { Ex07Component } from "./ex07/ex07.component";
import { Ex08Component } from "./ex08/ex08.component";
import { Ex09Component } from "./ex09/ex09.component";
import { Ex10Component } from "./ex10/ex10.component";
import {ExExamComponent} from "./ex-exam/ex-exam.component";

export const routes: Routes = [
  { path: "Ex01component", component: Ex01Component, title: "Ex01"},
  { path: "Ex02component", component: Ex02Component, title: "Ex02"},
  { path: "Ex03component", component: Ex03Component, title: "Ex03"},
  { path: "Ex04component", component: Ex04Component, title: "Ex04"},
  { path: "Ex05component", component: Ex05Component, title: "Ex05"},
  { path: "Ex06component", component: Ex06Component, title: "Ex06"},
  { path: "Ex07component", component: Ex07Component, title: "Ex07"},
  { path: "Ex08component", component: Ex08Component, title: "Ex08"},
  { path: "Ex09component", component: Ex09Component, title: "Ex09"},
  { path: "Ex10component", component: Ex10Component, title: "Ex10"},
  { path: "ExExamComponent", component: ExExamComponent, title: "ExExam"},
];
