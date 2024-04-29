import { Component, OnInit } from '@angular/core';
import { ChefService } from '../chef.service';
import { Meal } from '../Meal';
import { ActivatedRoute, Router } from '@angular/router';
import { observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css']
})
export class UpdateRecipeComponent implements OnInit {
  id!: number;
  meal!: Meal;
  ingredients!: any;
  image!: any;

  constructor(private route: ActivatedRoute, private router: Router, private chefService: ChefService) { }

  ngOnInit(){
    this.meal= new Meal();
    this.id = this.route.snapshot.params['id'];
    this.ingredients = this.route.snapshot.params['ingredients'];
    this.image = this.route.snapshot.params['image'];
    this.chefService.GetMeals(this.id).subscribe(data => {console.log(data)
    this.meal = data;
  }, error => console.log(error));
  console.log(this.meal);
  }
changeMeal(){
  this.chefService.changeMeal(this.id, this.meal).subscribe(data => console.log(data), error => console.log(error));
  console.log(this.meal);
  this.meal = new Meal();
  this.gotoList();
}
onSubmit(){
  this.changeMeal();
}
gotoList(){
  this.router.navigate(['/meals']);
}
}
