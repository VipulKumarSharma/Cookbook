import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chilli Potato', 'Chilli Potato recipe', 'https://www.ndtv.com/cooks/images/Honey.chilli.potatoes.jpg?downsize=650:400&output-quality=70&output-format=webp'),
    new Recipe('Paneer Tikka', 'Paneer Tikka recipe', 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Home_made_Paneer_Tikka_prepared_in_air_frier.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
