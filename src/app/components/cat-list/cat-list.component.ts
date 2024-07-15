import { Component, Input, OnInit } from '@angular/core';
import { Cat } from '../../services/cat.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  @Input() cats: Cat[] = [];
  ngOnInit(): void {

  }

  get sortedCats(): Cat[] {
    return this.cats.sort((a, b) => b.score - a.score);
  }
}