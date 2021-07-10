import { Component, OnInit } from '@angular/core';


// decorator
@Component({
  selector: 'app-demo', // selector của thẻ (thường dùng là tên thẻ)
  template: `
    <div class="color-red">Hello Cybersoft</div>
  `, // Chứa thành phần giao diện của thẻ giống hàm render của react
  styles: [`
    div.color-red{
      color: red;
    }
  `] // Phần link đến file css nếu là urls, không có url thì viết css trong file
})


export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
