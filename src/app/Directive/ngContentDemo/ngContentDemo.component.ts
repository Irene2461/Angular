import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  template: `
    <div class="container">
      <h3>Nội dung thẻ app-ng-content</h3>

      <ng-content select=".title"></ng-content>
      <hr />
      <ng-content select=".content"></ng-content>
    </div>
  `
})

export class NgContentComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
