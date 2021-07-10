import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-5',
  template:`
    <div class="container-fluid">
      <ng-container  *ngIf="(taiKhoan ==='ngoc' && matKhau ==='123456') else chuaDangNhap">
      </ng-container>
      <ng-container  *ngIf="(taiKhoan !=='ngoc' || matKhau !== '123456') else dangNhap" ></ng-container>
      <ng-template #chuaDangNhap>
        <h3>Login</h3>
        <hr />
        <form>
          <p>UserName</p>
          <input #account [value]="" class="form-control" />
          <p>Password</p>
          <input #password [value]="" class="form-control" />
        </form>
        <br />
        <button (click)="Login(account.value,password.value)" class="btn btn-success">Login</button>
        <h4>Thông tin tài khoản</h4>
        <p>Tài khoản: ngoc</p>
        <p>Mật khẩu: 123456</p>
      </ng-template>
      <ng-template #dangNhap>
        <div>Đã đăng nhập</div>
        <h1>Hello Ngoc!</h1>
        <button (click)="setBack()" class="btn btn-primary">Đăng xuất</button>
      </ng-template>
    </div>
  `,
  styles: [
    `

    `
  ]
})

export class BaiTap5Component implements OnInit {
  info: boolean = false;
  taiKhoan: string = '';
  matKhau: string = '';
  constructor() { }

  Login(account: string, password: string){
    this.taiKhoan = account;
    this.matKhau = password;
  }

  setBack(){
    this.taiKhoan = '';
    this.matKhau = '';
  }

  setInfo(){
    this.info = true;
  }

  ngOnInit() { }
}
