import { Component, Input, OnInit } from '@angular/core';
import { Cat } from '../../services/cat.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  @Input() cats: Cat[] = [];
  displayedCats: Cat[] = [];
  currentIndex: number = 0;
  readonly BATCH_SIZE: number = 2;

  ngOnInit(): void {
    this.loadMoreCats();
  }

  loadMoreCats(): void {
    const nextIndex = this.currentIndex + this.BATCH_SIZE;
    this.displayedCats.push(...this.cats.slice(this.currentIndex, nextIndex));
    this.currentIndex = nextIndex;
  }
}
