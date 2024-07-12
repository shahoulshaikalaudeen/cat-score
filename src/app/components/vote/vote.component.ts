import { Component, OnInit } from '@angular/core';
import { CatService, Cat } from '../../services/cat.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

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

  voteCat(cat: Cat, vote: number): void {
    this.catService.voteCat(cat.id, vote).subscribe(() => {
      cat.score += vote;
    });
  }
}
