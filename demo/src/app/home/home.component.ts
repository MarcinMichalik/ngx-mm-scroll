import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(ModalDirective) modal: ModalDirective;
  currentCurrency: string;
  currentAddress: string;
  currentIcon: string;
  showThanks = false;
  showMiner = false;

  constructor() { }

  ngOnInit() {

  }

  openModal(icon: string, currency: string, address: string) {
    this.currentIcon = icon;
    this.currentCurrency = currency;
    this.currentAddress = address;
    this.modal.show();
  }

}
