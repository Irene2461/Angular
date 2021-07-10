import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-side-bar',
    template: `
        <div class="sidebar">
            Sidebar
        </div>
    `,
    styles: [
        `
            .sidebar{
                background-color: yellow;
                color: black;
                text-align: center;
                height: 200px;
            }
        `
    ]
})

export class BTSidebarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}