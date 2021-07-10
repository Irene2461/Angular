import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-header',
    template: `<div class="header">
        Header
    </div>`,
    styles:[
        `
            .header{
                background-color: red;
                color: #fff;
                text-align: center;
            }
        `
    ]
})

export class BTHeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}