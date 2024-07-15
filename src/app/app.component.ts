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

  ngOnInit() {
    this.catService.getAllCats().subscribe((cats: Cat[]) => {
      this.cats = cats;
    });
  }
}
