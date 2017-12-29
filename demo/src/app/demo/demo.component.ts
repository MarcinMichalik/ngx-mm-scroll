import { Component, OnInit } from '@angular/core';
import { NgxMMScrollService } from 'ngx-mm-scroll';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(private scroll: NgxMMScrollService) { }

  ngOnInit() {
  }

  scrollTo() {
    this.scroll.scrollIntoView('#hello');
  }

}
