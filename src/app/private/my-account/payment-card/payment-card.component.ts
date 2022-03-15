import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { AddCardDetailsComponent } from './add-card-details/add-card-details.component'
@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss']
})
export class PaymentCardComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddCardDetailsComponent, {
      height: '650px',
      width: '900px',
    });
  }
  ngOnInit(): void {
  }

}
