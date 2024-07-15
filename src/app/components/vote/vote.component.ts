import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cat, CatService } from '../../services/cat.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {

  @Input() cats: Cat[] = [];
  @Output() catVoted = new EventEmitter<Cat>();
  competingCats: Cat[] = [];

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.chooseRandomCats();
  }

  chooseRandomCats(): void {
    if (this.cats.length > 1) {
      const firstCatIndex = Math.floor(Math.random() * this.cats.length);
      let secondCatIndex = Math.floor(Math.random() * this.cats.length);
      while (secondCatIndex === firstCatIndex) {
        secondCatIndex = Math.floor(Math.random() * this.cats.length);
      }
      this.competingCats = [this.cats[firstCatIndex], this.cats[secondCatIndex]];
    }
  }

  voteCat(cat: Cat, vote: number): void {
    this.catService.voteCat(cat.id, vote).subscribe(() => {
      cat.score += vote;
      this.catVoted.emit(cat);
      this.chooseRandomCats();
    });
  }
}
