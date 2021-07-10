import { BT5Module } from './BT5/BT5.module';
import { BT5Component } from './BT5/BT5component/BT5.component';
import { BaiTap6Module } from './BaiTap6/BaiTap6.module';
import { BaiTap5Module } from './BaiTap5/BaiTap5.module';
import { PropsModule } from './Props/Props.module';
import { DirectiveModule } from './Directive/Directive.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTapLayoutModule } from './BaiTapLayOut/BaiTapLayOut.module';
import { DataBindingModule } from './DataBinding/DataBinding.module';
import { DemoComponent } from './demo/demo.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';


registerLocaleData(en);


@NgModule({
  declarations: [ // Khai báo các component sử dụng được trong module này
    AppComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    BaiTapLayoutModule, // Chỉ cần import module này thì trong app module có thể sử dụng tất cả những gì mà BaiTapLayout export
    DataBindingModule,
    DirectiveModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    PropsModule,
    BaiTap5Module,
    BaiTap6Module,
    BT5Module
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent] // Các thẻ có thể sử dụng được trên file index.html
})
export class AppModule {}
