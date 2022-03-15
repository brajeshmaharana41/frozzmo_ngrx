import { Component, OnInit } from '@angular/core';
import { YourClassComponent } from "../your-class.component";
@Component({
  selector: 'app-google-cls',
  templateUrl: './google-cls.component.html',
  styleUrls: ['./google-cls.component.scss']
})
export class GoogleClsComponent implements OnInit {

  constructor() { }
  showClass: boolean = false ;

  toggle_nameShow() {

    this.showClass = ! this.showClass;

  }
  ngOnInit(): void {
  }

}
