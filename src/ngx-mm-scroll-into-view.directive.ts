import {Directive, HostListener, Input, OnInit} from '@angular/core';
import {NgxMMScrollService} from './ngx-mm-scroll.service';

@Directive({
    selector: '[ngxMmScrollIntoView]'
})
export class NgxMMScrollIntoViewDirective implements OnInit {

    @Input() scrollToElement: string | HTMLElement;
    @Input('behavior') behavior: ScrollBehavior;

    constructor(private scrollService: NgxMMScrollService) {

    }

    ngOnInit(): void {
        this.behavior = (!this.behavior) ? 'smooth' : this.behavior;
    }

    @HostListener('mousedown')
    onMouseClick() {
        this.scrollService.scrollIntoView(this.scrollToElement, this.behavior);
    }
}
