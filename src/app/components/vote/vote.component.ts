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

  constructor(private catService: CatService) { }

  voteCat(cat: Cat, vote: number): void {
    this.catService.voteCat(cat.id, vote).subscribe(() => {
      cat.score += vote;
      this.catVoted.emit(cat);
    });
  }
}
