import { BrowserModule } from '@angular/platform-browser';
import { BaiTap5Component } from './BaiTap5Component/BaiTap5.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AntDesignModule } from '../_core/common/Antd.module';

@NgModule({
  declarations: [BaiTap5Component],
  imports: [BrowserModule,FormsModule,AntDesignModule],
  exports: [BaiTap5Component],

})
export class BaiTap5Module { }
