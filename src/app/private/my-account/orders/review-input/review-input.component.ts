import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-review-input',
  templateUrl: './review-input.component.html',
  styleUrls: ['./review-input.component.scss']
})
export class ReviewInputComponent implements OnInit {

  
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  public toggleSelected1() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

  public toggleSelected2() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

  public toggleSelected3() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

  public toggleSelected4() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

  public toggleSelected5() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

}
