import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt5',
  template: `
    <div class="container">

        <ng-template #daDangNhap>
          <h2>Hello {{name}} !</h2>
          <h4>Bạn đã đăng nhập thành công</h4>
          <button (click)="Logout()" class="btn btn-danger">Đăng xuất</button>
        </ng-template>
        <ng-container *ngIf="(!isLogin) ; else daDangNhap">
          <form>
          <h2>Login</h2>
            <hr />
            <div class="form-group">
              <label for="taiKhoan">Tài khoản</label>
              <input #taiKhoan type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="matKhau">Mật khẩu</label>
              <input #matKhau type="password" class="form-control">
            </div>
            <button (click)="Login(taiKhoan.value,matKhau.value)" type="submit" class="btn btn-primary">Đăng nhập</button>
          </form>
        </ng-container>


    </div>
  `,
})

export class BT5Component implements OnInit {
  name: string = 'Ngọc';
  isLogin: boolean = false;
  constructor() { }
  Logout(){
    this.isLogin = false;
  }
  Login(account: string, password: string){
    if (account === 'cybersoft' && password ==='cybersoft')
      this.isLogin = true;
    else this.isLogin = false;
  }
  ngOnInit() { }
}
