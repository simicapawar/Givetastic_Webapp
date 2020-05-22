import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatMenu } from '@angular/material/menu';
import { MatCheckbox } from '@angular/material/checkbox';
import { DialogWalletComponent } from '../dialog-wallet/dialog-wallet.component';
import { DialogCompanyInfoComponent } from '../dialog-company-info/dialog-company-info.component';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  collapsed = true;

  constructor(public dialog: MatDialog) { }

  openCreateWalletDialog() {
    let dialogRef = this.dialog.open(DialogWalletComponent, {
      width: '1200px',
    }); 

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openCompanyInfoDialog() {
    let dialogRef = this.dialog.open(DialogCompanyInfoComponent, {
      width: '1200px',

    }); 

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  ngOnInit(): void {
  } 

}
