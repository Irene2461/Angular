import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-footer',
    template: `
        <div class="footer">
            Footer
        </div>
    `,
    styles:[
        `
            .footer{
                background-color: pink;
                color: #fff;
                text-align: center;
                height: 100px;
            }
        `
    ]
})

export class BTFooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}