import { SanPham } from './../../_core/models/SanPham';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  template: `
    <div class="container">
      <h3>Hi {{ name }}</h3>
      <h3>{{ showMessage('Ngọc') }}</h3>

      <!-- <div [innerHTML]="'hello ' + name"></div> -->
      <input #inputTag [value]="name" /><br /><br />
      <img [src]="srcImg" alt="..." />
      <br /> <br />
      <button class="btn btn-success" (click)="changeName(inputTag.value)" >Change name</button>
      <hr />
      <h3>Twoway binding</h3>
      <div class="row">
        <div class="col-6">
          <h3>Nhập thông tin sản phẩm</h3>
          <div class="form-group">
            <p>Mã sp</p>
            <input [(ngModel)]="sanPham.maSP" class="form-control" #maSP />
          </div>
          <div class="form-group">
            <p>Tên sp</p>
            <input [(ngModel)]="sanPham.tenSP" #inputTag1 class="form-control" #tenSP />
          </div>
          <div class="form-group">
            <p>Hình ảnh sp</p>
            <input [(ngModel)]="sanPham.hinhAnh" class="form-control" #hinhAnh />
          </div>
          <div class="form-group">
            <p>Giá sp</p>
            <input [(ngModel)]="sanPham.gia" class="form-control" #gia />
          </div>
          <div class="form-group">
            <button (click)="nhapThongTin(maSP.value,tenSP.value,gia.value,hinhAnh.value)" >Nhập thông tin</button>
          </div>
        </div>
        <div class="col-6">
          <div class="card w-50 h-100">
            <img [src]="sanPham.hinhAnh" class="h-100" alt="..." />
            <div class="card-body">
              <h3>{{sanPham.tenSP}}</h3>
              <p>{{sanPham.gia}}$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class DataBindingComponent implements OnInit {
  // Tất cả dữ liệu trên giao diện đều được quản lý bởi [thuộc tính] của component. MVVM
  name: string = 'Cybersoft';
  srcImg: string = 'https://picsum.photos/id/99/200/200';
  sanPham:SanPham = {
    maSP:'1',
    tenSP:'Iphone',
    gia:1000,
    hinhAnh:'https://picsum.photos/id/100/200/200'
  };

  constructor() {}

  nhapThongTin(maSP:string,tenSP:string,gia:string,hinhAnh:string){
    this.sanPham = {maSP,tenSP,gia: Number(gia),hinhAnh};
  }

  changeName(newName:string):void{
    this.name = newName;
  }

  ngOnInit() {}

  showMessage(name: string): string {
    return `Hello ${name}`;
  }
}
