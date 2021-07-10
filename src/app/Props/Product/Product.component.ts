import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <div class="container">
      <div class="card text-left">
        <img class="card-img-top" [src]="product.img" alt="...">
        <div class="card-body">
          <h4 class="card-title">{{product.name}}</h4>
          <p class="card-text">{{product.price}}</p>
        </div>
      </div>
    </div>
  `
})

export class ProductComponent implements OnInit {
  // Input là thuộc tính nhận giá trị từ component cha truyền vào
  @Input() product: any = {};

  constructor() { }

  ngOnInit() { }
}

