import { Component, OnInit, Input } from '@angular/core';

export interface AddresList {
  name: string;
  address: string;
  house: string;
  contry: string;
  pincode: string;
  city: string;
  state: string;
  title: string;
}

@Component({
  selector: 'app-address-book-card',
  templateUrl: './address-book-card.component.html',
  styleUrls: ['./address-book-card.component.scss']
})
export class AddressBookCardComponent implements OnInit {

  @Input() address_details : AddresList;

  constructor() { }

  ngOnInit(): void {
  }

}
