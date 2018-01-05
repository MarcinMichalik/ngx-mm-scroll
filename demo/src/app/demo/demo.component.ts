import {Component, OnInit, ViewChild} from '@angular/core';
import { NgxMMScrollService } from 'ngx-mm-scroll';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  scrollByPlus100pxCode = `
    <pre>
        <code class="typescript highlight">
constructor(private scrollService: NgxMMScrollService) { }
scrollByPlus100px() {
    this.scrollService.scrollBy(100, 0);
}
        </code>
    </pre>`;
  scrollByMinus100pxCode = `
    <pre>
        <code class="typescript highlight">
constructor(private scrollService: NgxMMScrollService) { }
scrollByMinus100px() {
    this.scrollService.scrollBy(-100, 0);
}
        </code>
    </pre>`;
  scrollByElementCode = `
    <pre>
        <code class="html highlight">
&lt;button type="button" class="btn btn-primary" (click)="scrollByElement(scrollByElement1)"&gt;
    Scroll element by 100px
&lt;/button&gt;
&lt;div class="card mt-4"&gt;
    &lt;div class="card-body card-body-scrollable" #scrollByElement1&gt;
    ...
    &lt;/div&gt;
&lt;/div&gt;
        </code>
    </pre>
    <pre>
        <code class="typescript highlight">
constructor(private scrollService: NgxMMScrollService) { }
scrollByElement(element: HTMLElement) {
    this.scrollService.scrollBy(100, 0, element);
}
        </code>
    </pre>`;
  scroll1000pxCode = `
    <pre>
        <code class="typescript highlight">
constructor(private scrollService: NgxMMScrollService) { }
scroll1000px() {
    this.scrollService.scroll(1000, 0);
}
        </code>
    </pre>`;
  scroll300pxElementCode = `
    <pre>
        <code class="html highlight">
&lt;button type="button" class="btn btn-primary" (click)="scroll300pxElement(scrollScrollable)"&gt;
    Scroll content to 300px
&lt;/button&gt;
&lt;div class="card mt-4"&gt;
    &lt;div class="card-body card-body-scrollable" #scrollScrollable&gt;
    ...
    &lt;/div&gt;
&lt;/div&gt;
        </code>
    </pre>
    <pre>
        <code class="typescript highlight">
constructor(private scrollService: NgxMMScrollService) { }
scroll300pxElement(element: HTMLElement) {
    this.scrollService.scroll(1000, 0, element);
}
        </code>
    </pre>`;
  scrollTo2000pxCode = `
    <pre>
        <code class="typescript highlight">
constructor(private scrollService: NgxMMScrollService) { }
scrollTo2000px() {
    this.scrollService.scrollTo(2000, 0);
 }
        </code>
    </pre>`;
  scrollTo300pxElementCode = `
    <pre>
        <code class="html highlight">
&lt;button type="button" class="btn btn-primary" (click)="scrollTo300pxElement()"&gt;
    Scroll content to 300px
&lt;/button&gt;
&lt;div class="card mt-4"&gt;
    &lt;div class="card-body card-body-scrollable" id="scrollToScrollable"&gt;
    ...
    &lt;/div&gt;
&lt;/div&gt;
        </code>
    </pre>
    <pre>
        <code class="typescript highlight">
constructor(private scrollService: NgxMMScrollService) { }
scrollTo300pxElement() {
    this.scrollService.scrollTo(1000, 0, '#scrollToScrollable');
}
        </code>
    </pre>`;
  scrollElCode = `
    <pre>
        <code class="html highlight">
&lt;h3 class="text-center mb-5" #scrollByHeader"&gt;scrollBy&lt;/h3&gt;
...
&lt;button type="button" class="btn btn-primary" (click)="scrollEl(scrollByHeader)"&gt;
    Scroll to "scrollBy" section
&lt;/button&gt;
        </code>
    </pre>
    <pre>
        <code class="typescript highlight">
constructor(private scrollService: NgxMMScrollService) { }
scrollToEl() {
    this.scrollService.scrollToEl('#scrollIntoViewHeader');
}
        </code>
    </pre>
  `;
  scrollElToHeaderCode = `
<pre>
        <code class="html highlight">
&lt;button type="button" class="btn btn-primary" (click)="scrollElToHeader(scrollElScrollable)"&gt;
    Scroll content to header
&lt;/button&gt;
&lt;div class="card mt-4"&gt;
  &lt;div class="card-body card-body-scrollable text-dark" #scrollElScrollable&gt;
  ...
  &lt;h2 id="scrollElHeader"&gt;Header&lt;/h2&gt;
  ...
  &lt;/div&gt;
&lt;/div&gt;
        </code>
    </pre>
    <pre>
        <code class="typescript highlight">
constructor(private scrollService: NgxMMScrollService) { }
scrollElToHeader(scrollable: HTMLElement) {
    this.scrollService.scrollEl('#scrollElHeader', scrollable);
}
        </code>
    </pre>
  `;
  scrollToElCode = `
    <pre>
        <code class="html highlight">
&lt;h3 class="text-center mb-5" id="scrollIntoViewHeader"&gt;scrollIntoView&lt;/h3&gt;
        </code>
    </pre>
    <pre>
        <code class="typescript highlight">
constructor(private scrollService: NgxMMScrollService) { }
scrollToEl() {
    this.scrollService.scrollToEl('#scrollIntoViewHeader');
}
        </code>
    </pre>
  `;
  scrollToElToHeaderCode = `
<pre>
        <code class="html highlight">
&lt;button type="button" class="btn btn-primary" (click)="scrollToElToHeader(scrollToElHeader)"&gt;
    Scroll content to header
&lt;/button&gt;
&lt;div class="card mt-4"&gt;
  &lt;div class="card-body card-body-scrollable text-dark" id="scrollToElScrollable"&gt;
  ...
  &lt;h2 #scrollToElHeader&gt;Header&lt;/h2&gt;
  ...
  &lt;/div&gt;
&lt;/div&gt;
        </code>
    </pre>
    <pre>
        <code class="typescript highlight">
constructor(private scrollService: NgxMMScrollService) { }
scrollToElToHeader(target: HTMLElement) {
    this.scrollService.scrollToEl(target, '#scrollToElScrollable');
}
        </code>
    </pre>`;
  scrollIntoViewCode = `
    <pre>
        <code class="html highlight">
&lt;button type="button" class="btn btn-primary" (click)="scrollIntoView()"&gt;
    ScrollIntoView
&lt;/button&gt;
&lt;div class="card mt-4"&gt;
    &lt;div class="card-body card-body-scrollable"&gt;
    ...
    &lt;h2 id="header"&gt;Header&lt;/h2&gt;
    ...
    &lt;/div&gt;
&lt;/div&gt;
        </code>
    </pre>
    <pre>
        <code class="typescript highlight">
constructor(private scrollService: NgxMMScrollService) { }
scrollIntoView() {
    this.scrollService.scrollIntoView('#header');
 }
        </code>
    </pre>
  `;

  constructor(private scrollService: NgxMMScrollService) { }

  ngOnInit() {
  }

  scrollByPlus100px() {
    this.scrollService.scrollBy(100, 0);
  }

  scrollByMinus100px() {
    this.scrollService.scrollBy(-100, 0);
  }

  scrollByElement(element: HTMLElement) {
    this.scrollService.scrollBy(100, 0, element);
  }

  scroll1000px() {
    this.scrollService.scroll(1000, 0);
  }

  scroll300pxElement(element: HTMLElement) {
    this.scrollService.scroll(1000, 0, element);
  }

  scrollTo2000px() {
    this.scrollService.scrollTo(2000, 0);
  }

  scrollTo300pxElement() {
    this.scrollService.scrollTo(1000, 0, '#scrollToScrollable');
  }

  scrollEl(element: HTMLElement) {
    this.scrollService.scrollEl(element);
  }

  scrollElToHeader(scrollable: HTMLElement) {
    this.scrollService.scrollEl('#scrollElHeader', scrollable);
  }

  scrollToEl() {
    this.scrollService.scrollToEl('#scrollIntoViewHeader');
  }

  scrollToElToHeader(target: HTMLElement) {
    this.scrollService.scrollToEl(target, '#scrollToElScrollable');
  }

  scrollIntoView() {
    this.scrollService.scrollIntoView('#header');
  }

}
