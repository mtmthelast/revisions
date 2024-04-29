import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Meal } from './Meal';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { MenuComponent } from './menu/menu.component';
import { TasteComponent } from './taste/taste.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path: '', redirectTo: 'meal', pathMatch: 'full'},
  {path: 'meals', component: MenuComponent},
  {path: 'Add', component:CreateRecipeComponent},
  {path: 'update/:id', component:UpdateRecipeComponent},
  {path: 'details/:id', component: TasteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
