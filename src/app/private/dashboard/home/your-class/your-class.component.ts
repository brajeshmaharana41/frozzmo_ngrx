import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { InviteStuComponent } from './invite-stu/invite-stu.component'
import { AddNewClsComponent } from './add-new-cls/add-new-cls.component'
import { AddStuClsComponent } from './add-stu-cls/add-stu-cls.component'
import { GoogleClsComponent } from './google-cls/google-cls.component'
import { ReUpdateClsComponent } from './re-update-cls/re-update-cls.component'
import { RewardClassComponent } from './reward-class/reward-class.component'

export interface PeriodicElement {
  item: string;
  name: string;
  icons: string;
  symbol: number;
}
// interface Food {
//   value: string;
//   viewValue: string;
// }
const ELEMENT_DATA: PeriodicElement[] = [
  { icons: '../../../../../assets/josephpic.png', name: 'Joseph', symbol: 20, item: 'card_giftcard'},
  { icons: '../../../../../assets/andrewpic.png', name: 'Sam Conner', symbol: 20,  item: 'card_giftcard'},
  { icons: '../../../../../assets/Avatar.png', name: 'Andrew', symbol: 20,  item: 'card_giftcard'},
  { icons: '../../../../../assets/andrewpic.png', name: 'Sam Conner', symbol: 20,  item: 'card_giftcard'},
  { icons: '../../../../../assets/Ellipse 24.png', name: 'Harriett Clark', symbol: 100,  item: 'card_giftcard'},
];
@Component({
  selector: 'app-your-class',
  templateUrl: './your-class.component.html',
  styleUrls: ['./your-class.component.scss'],
})
export class YourClassComponent implements OnInit {
  displayedColumns: string[] = ['demo-icons', 'demo-name', 'demo-symbol','demo-item'];
  dataSource = ELEMENT_DATA;
  // foods: Food[] = [
  //   {value: 'new', viewValue: 'Create a new class'},
  //   {value: 'google', viewValue: 'Google Classroom'},
  // ];
  constructor(public dialog: MatDialog) { }

  invteDialog() {
    const dialogRef = this.dialog.open(InviteStuComponent, {
      height: '600px',
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  reupdateDialog() {
    const dialogRef = this.dialog.open(ReUpdateClsComponent , {
      height: '550px',
      width: '450px', 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addstuDialog() {
    const dialogRef = this.dialog.open(AddStuClsComponent, {
      height: '550px',
      width: '450px',  
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addclsDialog() {
    const dialogRef = this.dialog.open(AddNewClsComponent, {
      height: '550px',
      width: '450px', 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  googleclsDialog() {
    const dialogRef = this.dialog.open(GoogleClsComponent, {
      height: '550px',
      width: '450px',  
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  rewardclsDialog() {
    const dialogRef = this.dialog.open(RewardClassComponent, {
      height: '550px',
      width: '450px',  
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  showClass: boolean = false ;

  toggle_nameShow() {

    this.showClass = ! this.showClass;

  }
  ngOnInit(): void {
  }

}
