import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sanphamlist',
  template: `
    <div class="container">
      <!-- <table class="table">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Tên</th>
            <th>Tên</th>
            <th>Tên</th>
          </tr>
        </thead>
      </table> -->
      <h3 class="text-dark">Quản lý danh mục sản phẩm</h3>
      <form>
        <p>Mã SP</p>
        <input #maSP class="form-control" />
        <p>Tên SP</p>
        <input #tenSP class="form-control" />
        <p>Giá</p>
        <input #gia class="form-control" />
        <button (click)="themSanPham(maSP.value,tenSP.value,gia.value)" class="btn btn-success my-2">Thêm sản phẩm</button>
      </form>
      <table class="table text-center">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <ng-container *ngIf="arrProduct; else ketQuaRong">
            <tr *ngFor="let sp of arrSanPham; let i = index">
              <td>
                {{i+1}}
              </td>
              <td>
                {{sp.maSP}}
              </td>
              <td>
                {{sp.tenSP}}
              </td>
              <td>
                {{sp.gia}}
              </td>
            </tr>
          </ng-container>
        </tbody>
      </table>
      <ng-template #ketQuaRong>
        <div>Không tìm thấy kết quả !</div>
      </ng-template>
    </div>
  `,
})

export class SanPhamListComponent implements OnInit {
  arrProduct: Product[] = [
    { id: '1', name: 'Iphone X', price: 1000, img: 'https://picsum.photos/id/1/200/200' },
    { id: '2', name: 'Iphone XS', price: 2000, img: 'https://picsum.photos/id/2/200/200' },
    { id: '3', name: 'Iphone XS MAX', price: 3000, img: 'https://picsum.photos/id/3/200/200' },

  ]

  arrSanPham: SanPham[] = [
    { maSP: 'DT', tenSP: 'Iphone X', gia: 1000},
    { maSP: 'LT', tenSP: 'Iphone XS', gia: 2000},
    { maSP: 'MTB', tenSP: 'Iphone XS MAX', gia: 3000},
  ]

  constructor() { }

  themSanPham(maSP:string, tenSP:string, gia: string){
    const sp: SanPham = {maSP: maSP, tenSP: tenSP, gia: Number(gia)};
    this.arrSanPham.push(sp);
  }

  ngOnInit() { }

}
interface Product {
  id: string,
  name: string,
  price: number,
  img: string
}

interface SanPham{
  maSP: string,
  tenSP: string,
  gia: number
}
