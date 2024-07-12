import { Component, OnInit } from '@angular/core';
import { CatService, Cat } from '../../services/cat.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  cats: Cat[] = [];
  displayedCats: Cat[] = [];
  currentIndex: number = 0;
  readonly BATCH_SIZE: number = 2;

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.loadCats();
  }

  loadCats(): void {
    this.catService.getAllCats().subscribe(data => {
      this.cats = data;
      this.loadMoreCats();
    });
  }

  loadMoreCats(): void {
    this.cats.sort((a, b) => b.score - a.score);
    const nextIndex = this.currentIndex + this.BATCH_SIZE;
    this.displayedCats.push(...this.cats.slice(this.currentIndex, nextIndex));
    this.currentIndex = nextIndex;
  }
  
}
