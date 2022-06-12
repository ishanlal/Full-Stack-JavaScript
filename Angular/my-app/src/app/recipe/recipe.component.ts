import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  name: string = 'dal delight';
  ingredient1: string = 'toor or masoor lentils';
  ingredient2: string = 'oil & spices';
  ingredient3: string = 'water';

  constructor() { }

  ngOnInit(): void {
  }

}
