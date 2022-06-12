import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../models/Animal';

@Component({
  selector: 'app-zoo-animal',
  templateUrl: './zoo-animal.component.html',
  styleUrls: ['./zoo-animal.component.css']
})
export class ZooAnimalComponent implements OnInit {
  @Input() animal: Animal;
  @Output() liked = new EventEmitter();

  constructor() {
    this.animal={
      id: 0,
      name: '',
      fed: false
    }
  }

  ngOnInit(): void {
  }

}
