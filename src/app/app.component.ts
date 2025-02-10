import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'simple-pagination-angular';

  data = {
    count: 23,
    results: [
      { name: "Homer", id: 1, age: 39 },
      { name: "Marge", id: 2, age: 36 },
      { name: "Bart", id: 3, age: 10 },
      { name: "Lisa", id: 4, age: 8 },
      { name: "Maggie", id: 5, age: 1 },
      { name: "Ned", id: 6, age: 40 },
      { name: "Maude", id: 7, age: 38 },
      { name: "Rod", id: 8, age: 12 },
      { name: "Todd", id: 9, age: 10 },
      { name: "Milhouse", id: 10, age: 10 },
      { name: "Ralph", id: 11, age: 8 },
      { name: "Nelson", id: 12, age: 12 },
      { name: "Skinner", id: 13, age: 50 },
      { name: "Willie", id: 14, age: 45 },
      { name: "Edna", id: 15, age: 42 },
      { name: "Krusty", id: 16, age: 55 },
      { name: "Apu", id: 17, age: 44 },
      { name: "Moe", id: 18, age: 48 },
      { name: "Barney", id: 19, age: 40 },
      { name: "Lenny", id: 20, age: 39 },
      { name: "Carl", id: 21, age: 39 },
      { name: "Smithers", id: 22, age: 45 },
      { name: "Burns", id: 23, age: 81 },
    ]
  };

  results: any[] = [];
  currentIndex = 0;
  isLastPage = false;
  readonly pageSize = 10;

  ngOnInit(): void {
    this.updateResults();
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  onFirstBtnClick(): void {
    this.currentIndex = 0;
    this.updateResults();
  }

  onNextBtnClick(): void {
    if (!this.isLastPage) {
      this.currentIndex += this.pageSize;
      this.updateResults();
    }
  }

  onPreviousBtnClick(): void {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.pageSize;
      this.updateResults();
    }
  }

  onLastBtnClick(): void {
    this.currentIndex = Math.floor(this.data.count / this.pageSize) * this.pageSize;
    this.updateResults();
  }

  private updateResults(): void {
    const start = this.currentIndex;
    const end = Math.min(start + this.pageSize, this.data.count);
    this.results = this.data.results.slice(start, end);
    this.isLastPage = end >= this.data.count;
  }
}
