import { NgModule } from '@angular/core';
// module hỗ trợ 2way binding
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './DataBindingComponent/DataBinding.component';


@NgModule({
    declarations: [DataBindingComponent],
    imports: [FormsModule],
    exports: [DataBindingComponent],
})
export class DataBindingModule { }
