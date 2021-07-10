import { NgModule } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  imports: [NzCarouselModule,NzGridModule],
  exports: [NzCarouselModule,NzGridModule],
})
export class AntDesignModule { }
