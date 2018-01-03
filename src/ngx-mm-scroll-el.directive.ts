import {Directive, HostListener, Input, OnInit} from '@angular/core';
import {NgxMMScrollService} from './ngx-mm-scroll.service';

@Directive({
    selector: '[ngxMmScrollEl]'
})
export class NgxMMScrollElDirective implements OnInit {

    @Input() scrollToElement: string | HTMLElement;
    @Input('scrollable') scrollable: string | HTMLElement | Window;
    @Input('behavior') behavior: ScrollBehavior;

    constructor(private scrollService: NgxMMScrollService) {

    }

    ngOnInit(): void {
        this.scrollable = (!this.scrollable) ? window : this.scrollable;
        this.behavior = (!this.behavior) ? 'smooth' : this.behavior;
    }

    @HostListener('mousedown')
    onMouseClick() {
        this.scrollService.scrollEl(this.scrollToElement, this.scrollable, this.behavior);
    }
}
