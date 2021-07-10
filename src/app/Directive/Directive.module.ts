import { NgContentComponent } from './ngContentDemo/ngContentDemo.component';
import { BrowserModule } from '@angular/platform-browser';
import { DirectiveComponent } from './DirectiveComponent/Directiver.component';
import { NgModule } from '@angular/core';
// module sử dụng 2waybinding
import { FormsModule } from '@angular/forms';
import { AntDesignModule } from '../_core/common/Antd.module';
// import module antd để sử dụng thẻ
// import { NzCarouselModule } from 'ng-zorro-antd/carousel';


@NgModule({
  declarations: [DirectiveComponent,NgContentComponent],
  imports: [BrowserModule,FormsModule,AntDesignModule],
  exports: [DirectiveComponent],

})
export class DirectiveModule { }
