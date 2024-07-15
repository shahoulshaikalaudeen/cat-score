import { Component } from '@angular/core';
import { Cat, CatService } from './services/cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cats: Cat[] = [];

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.loadCats();
  }

  loadCats(): void {
    this.catService.getAllCats().subscribe(data => {
      this.cats = data;
    });
  }

  updateCatScore(updatedCat: Cat): void {
    const index = this.cats.findIndex(cat => cat.id === updatedCat.id);
    if (index !== -1) {
      this.cats[index].score = updatedCat.score;
      this.cats.sort((a, b) => b.score - a.score);
    }
  }
}
