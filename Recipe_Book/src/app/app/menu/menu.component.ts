import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from '../Meal';
import { ChefService } from '../chef.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  meals: Observable<Meal[]> | undefined;
  id!: number;


  constructor(private chefService: ChefService, private router: Router) {}


  ngOnInit() {
    this.reload();
  }
  reload() {
   this.meals = this.chefService.getMealsList();
  }
  mealDetails(id:number){
    this.router.navigate(['details', id]);
  }
  changeMeal(id:number){
    this.router.navigate(['update', id]);
  }
  deleteMeal(id:number){
    this.chefService.deleteMeal(id).subscribe(data =>{console.log(data); this.reload();},
    error => console.log(error));
  }

}
