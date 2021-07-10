import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BT5Component } from './BT5component/BT5.component';
import { FormsModule } from '@angular/forms';
import { AntDesignModule } from '../_core/common/Antd.module';


@NgModule({
  declarations: [BT5Component],
  imports: [BrowserModule,FormsModule,AntDesignModule],
  exports: [BT5Component],
})
export class BT5Module { }
