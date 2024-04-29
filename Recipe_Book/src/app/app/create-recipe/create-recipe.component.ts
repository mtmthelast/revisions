import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ChefService} from '../chef.service';
import { Meal } from "../Meal";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {
  meal: Meal= new Meal();
  submitted=false;
  

  constructor(private chefService:ChefService, private router: Router) { }

  ngOnInit() {
  }
  newMeal(): void{
    this.submitted=false;
    this.meal = new Meal();
  }
  save(){
    this.chefService.makeMeal(this.meal).subscribe(data => console.log(data), error => console.log(error));
    this.meal = new Meal();
    this.gotoList()
  }
  onSubmit(){
    this.submitted = true;
    this.save();
  }
  gotoList(){
    this.router.navigate(['/meals']);
  }
}
