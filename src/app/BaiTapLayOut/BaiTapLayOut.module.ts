import { NgModule } from '@angular/core';
import { BaiTapLayoutComponent } from './BaiTapLayOut.component';
import { BTContentComponent } from './BTContent/BTContent.component';
import { BTFooterComponent } from './BTFooter/BTFooter.component';
import { BTHeaderComponent } from './BTHeader/BTHeader.component';
import { BTSidebarComponent } from './BTSidebar/BTSidebar.component';


@NgModule({
    declarations: [
        BaiTapLayoutComponent,
        BTSidebarComponent,
        BTHeaderComponent,
        BTContentComponent,
        BTFooterComponent
    ], // nơi khai báo các component được sử dụng cho module này
    imports: [],    // Import một module khác vào để sử dụng cho module này
    exports: [BaiTapLayoutComponent],    // Xuất ra những gì cho các module khác sử dụng
})
export class BaiTapLayoutModule { }
