import {Inject, Injectable, PLATFORM_ID} from '@angular/core';

import * as smoothscroll from 'smoothscroll-polyfill';
import {isPlatformBrowser} from '@angular/common';

@Injectable()
export class NgxMMScrollService {

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        smoothscroll.polyfill();
    }

    scrollEl(element: string | HTMLElement, scrollable: string | HTMLElement | Window = window, behavior: ScrollBehavior = 'smooth') {
        if (isPlatformBrowser(this.platformId)) {
            const el = this.getElement(element);
            if (el) {
                const viewportOffset = el.getBoundingClientRect();
                this.scroll(viewportOffset.top + window.pageYOffset, viewportOffset.left + window.pageXOffset, scrollable, behavior);
            }else {
                // TODO - error - don't find element
            }
        }else {
            // TODO - error - it's not browser
        }
    }

    scroll(top: number, left: number, scrollable: string | HTMLElement | Window = window, behavior: ScrollBehavior = 'smooth') {
        if (isPlatformBrowser(this.platformId)) {
            if (scrollable instanceof Window) {
                window.scroll({top: top, left: left, behavior: behavior});
            }else {
                const el = this.getElement(scrollable);
                if (el) {
                    el.scroll({top: top, left: left, behavior: behavior});
                }else {
                    // TODO - error - don't find element
                }
            }
        }else {
            // TODO - error - it's not browser
        }
    }

    scrollToEl(element: string | HTMLElement, scrollable: string | HTMLElement | Window = window, behavior: ScrollBehavior = 'smooth') {
        if (isPlatformBrowser(this.platformId)) {
            const el = this.getElement(element);
            if (el) {
                const viewportOffset = el.getBoundingClientRect();
                this.scrollTo(viewportOffset.top + window.pageYOffset, viewportOffset.left + window.pageXOffset, scrollable, behavior);
            }else {
                // TODO - error - don't find element
            }
        }else {
            // TODO - error - it's not browser
        }
    }

    scrollTo(top: number, left: number, scrollable: string | HTMLElement | Window = window, behavior: ScrollBehavior = 'smooth') {
        if (isPlatformBrowser(this.platformId)) {
            if (scrollable instanceof Window) {
                window.scrollTo({top: top, left: left, behavior: behavior});
            }else {
                const el = this.getElement(scrollable);
                if (el) {
                    el.scrollTo({top: top, left: left, behavior: behavior});
                }else {
                    // TODO - error - don't find element
                }
            }
        }else {
            // TODO - error - it's not browser
        }
    }

    scrollByEl(element: string | HTMLElement, scrollable: string | HTMLElement | Window = window, behavior: ScrollBehavior = 'smooth') {
        if (isPlatformBrowser(this.platformId)) {
            const el = this.getElement(element);
            if (el) {
                const viewportOffset = el.getBoundingClientRect();
                this.scrollBy(viewportOffset.top + window.pageYOffset, viewportOffset.left + window.pageXOffset, scrollable, behavior);
            }else {
                // TODO - error - don't find element
            }
        }else {
            // TODO - error - it's not browser
        }
    }

    scrollBy(top: number, left: number, scrollable: string | HTMLElement | Window = window, behavior: ScrollBehavior = 'smooth') {
        if (isPlatformBrowser(this.platformId)) {
            if (scrollable instanceof Window) {
                window.scrollBy({top: top, left: left, behavior: behavior});
            }else {
                const el = this.getElement(scrollable);
                if (el) {
                    el.scrollBy({top: top, left: left, behavior: behavior});
                }else {
                    // TODO - error - don't find element
                }
            }
        }else {
            // TODO - error - it's not browser
        }
    }

    scrollIntoView(element: string | HTMLElement, behavior: ScrollBehavior = 'smooth') {
        if (isPlatformBrowser(this.platformId)) {
            const el = this.getElement(element);
            if (el) {
                el.scrollIntoView({behavior: behavior});
            }else {
                // TODO - error - don't find element
            }
        }else {
            // TODO - error - it's not browser
        }
    }

    private getElement(element: string | HTMLElement): HTMLElement {
        if (typeof element === 'string') {
            return document.querySelector(element as string) as HTMLElement;
        }else if (element instanceof HTMLElement) {
            return element;
        }else {
            return null;
        }
    }
}
