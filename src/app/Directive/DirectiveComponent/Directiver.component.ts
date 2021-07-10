import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  template: `
    <div class="container" style="margin-bottom: 500px">
      <h3>ngIf</h3>
      <h3>{{number}}</h3>
      <input #num [value]="number" />
      <button (click)="nhapSo(num.value)" >In</button>
      <div *ngIf="number%2===0; else tempSoLe" >
        Số chẵn
      </div>
      <ng-template #tempSoLe>
        Số lẻ
      </ng-template>
      <hr />
      <h3>ng SwitchCase</h3>
      <select [(ngModel)]='color'>
        <option value="red">red</option>
        <option value="black">black</option>
        <option value="pink">pink</option>
        <option value="yellow">yellow</option>
        <option value="orange">orange</option>
      </select>
      <div [ngSwitch]="color">
        <div *ngSwitchCase="'red'" style="color:red">Red</div>
        <div *ngSwitchCase="'black'" style="color:black">Black</div>
        <div *ngSwitchCase="'pink'" style="color:pink">Pink</div>
        <div *ngSwitchCase="'yellow'" style="color:yellow">Yellow</div>
        <div *ngSwitchCase="'orange'" style="color:orange">Orange</div>
      </div>
      <hr />
      <h3>NgFor</h3>
      <h3>Product list</h3>
      <div class="row">
        <div class="col-4" *ngFor="let prod of arrProduct; let i = index;">
            <div class="card text-left">
              <img class="card-img-top" [src]="prod.img" alt="...">
              <div class="card-body">
                <h4 class="card-title">{{prod.name}}</h4>
                <p class="card-text">{{prod.price}}</p>
              </div>
            </div>
        </div>
      </div>
      <h3>Table product</h3>
      <table class="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>img</th>
            <th>price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <ng-container *ngIf="arrProduct; else ketQuaRong">
            <tr *ngFor="let prod of arrProduct; let i = index">
              <td>
                {{prod.id}}
              </td>
              <td>
                {{prod.name}}
              </td>
              <td>
                <img src="{{prod.img}}" alt="..." width="50" height="50" />
              </td>
              <td>
                {{prod.price}}
              </td>
              <td>
                <button class="btn btn-danger">Xoá</button>
              </td>
            </tr>
          </ng-container>
        </tbody>
      </table>

      <!-- Dòng này sẽ được render ra ko phụ thuộc vào if else khi dùng ngtemplateoutlet -->
      <ng-container *ngTemplateOutlet="ketQuaRong"></ng-container>

      <ng-template #ketQuaRong>
        <div>Không tìm thấy kết quả !</div>
      </ng-template>
      <hr />
      <h3>ng-Content</h3>
      <app-ng-content>
        <h3 class="title">Title</h3>
        <p class="content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, ratione incidunt? Similique alias nam, a dolorem aperiam id ducimus ipsum quas nulla fuga assumenda vel, tempora placeat, porro voluptatem earum.
        </p>
      </app-ng-content>
      <hr />
      <h3>ngClass</h3>
      <div class="container">
        <h3>Danh sách ghế</h3>
        <button [ngClass]="{'ghe-da-dat':ghe.daDat,'ghe-vip':ghe.vip} " class="ghe" *ngFor="let ghe of arrGhe" [disabled]="ghe.daDat">
          {{ghe.stt}}
        </button>
      </div>
      <hr />
      <h3>ng Style</h3>
      <p [ngStyle]="{'font-size': fontSize + 'px'}">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores beatae sed aperiam nobis. Harum beatae voluptas amet sunt non molestias distinctio eum, voluptates, doloremque dolorem incidunt velit minus, tempora delectus?
      </p>
      <button (click)="tangFontSize()">+</button>
      <button (click)="giamFontSize()">-</button>
      <hr />
      <h3>Sử dụng thư viện antd</h3>
      <nz-carousel [nzEffect]="effect">
        <div nz-carousel-content *ngFor="let index of array">
          <h3>{{ index }}</h3>
        </div>
      </nz-carousel>
    </div>
  `,
  styleUrls: ['./Directive.component.scss']
})

export class DirectiveComponent implements OnInit {

  fontSize:number = 20;
  array = [1, 2, 3, 4];
  effect = 'scrollx';

  arrGhe: Ghe[] = [
    {maGhe: '1', stt: '1', daDat:false, vip:false},
    {maGhe: '2', stt: '2', daDat:true, vip:true},
    {maGhe: '3', stt: '3', daDat:false, vip:true},
  ]

  arrProduct: Product[] = [
    { id: '1', name: 'Iphone X', price: 1000, img: 'https://picsum.photos/id/1/200/200' },
    { id: '2', name: 'Iphone XS', price: 2000, img: 'https://picsum.photos/id/2/200/200' },
    { id: '3', name: 'Iphone XS MAX', price: 3000, img: 'https://picsum.photos/id/3/200/200' },

  ]
  // arrProduct: any; // Nếu API chưa trả về hoặc trả về mảng rỗng sẽ in ra ko thấy kết quả

  color: string = 'red';
  number: number = 5;

  nhapSo(num: string) {
    this.number = Number(num);
  }

  tangFontSize(){
    this.fontSize+=1;
  }

  giamFontSize(){
    this.fontSize-=1;
  }

  constructor() { }

  ngOnInit() { }
}

interface Product {
  id: string,
  name: string,
  price: number,
  img: string
}

interface Ghe{
  maGhe: string,
  stt: string,
  daDat: boolean,
  vip: boolean
}
