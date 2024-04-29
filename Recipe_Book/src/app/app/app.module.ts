import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { MenuComponent } from './menu/menu.component';
import { TasteComponent } from './taste/taste.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    UpdateRecipeComponent,
    CreateRecipeComponent,
    MenuComponent,
    TasteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent, CreateRecipeComponent, MenuComponent]
})
export class AppModule { }
