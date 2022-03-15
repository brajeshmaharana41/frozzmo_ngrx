import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-filter-popup',
  templateUrl: './item-filter-popup.component.html',
  styleUrls: ['./item-filter-popup.component.scss']
})
export class ItemFilterPopupComponent implements OnInit {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  panelOpenState = false;

  seasons: string[] = ['200 Above', '100 to 200', '50 to 100', 'Under 25'];
  brands: string[] = ['Apsara','Cross','Reynolds','ZesTale'];
  brandlists: string[] = ['Classmate','Parker','Waterman','4Ever'];
  colorlists: string[] = [ 'Coffee','Ivory','Red'];
  colors: string[] = ['Grey','Pink','Yellow'];

  constructor() { }

  ngOnInit(): void {
  }

}
