import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PopOverComponent} from "./pop-over/pop-over.component";

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
