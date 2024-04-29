import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from '../Meal';
import { ChefService } from '../chef.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-taste',
  templateUrl: './taste.component.html',
  styleUrls: ['./taste.component.css']
})
export class TasteComponent implements OnInit {
  id!: number;
  meal!: Meal;

  name = "meal.name";
  ingredients = "meal.ingredients";

  constructor(private chefService: ChefService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.meal = new Meal();
    this.id = this.route.snapshot.params['id'];
    this.chefService.GetMeals(this.id).subscribe(data => {
      console.log(data)
      this.meal = data;
    }, error => console.log(error));


  }
  list(){
    this.router.navigate(['meals']);
  }

}

