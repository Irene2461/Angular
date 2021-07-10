import { SanPhamListComponent } from './SanPhamListComponent/SanPhamList.component';
import { SanPhamComponent } from './SanPhamComponent/SanPham.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { AntDesignModule } from '../_core/common/Antd.module';

@NgModule({
  declarations: [SanPhamComponent,SanPhamListComponent],
  imports: [BrowserModule,FormsModule,AntDesignModule],
  exports: [SanPhamListComponent],
})
export class BaiTap6Module { }
