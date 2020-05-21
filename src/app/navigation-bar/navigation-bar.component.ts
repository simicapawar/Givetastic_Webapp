import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { DialogWalletComponent } from '../dialog-wallet/dialog-wallet.component';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  collapsed = true;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    let dialogRef = this.dialog.open(DialogWalletComponent, {data: {name: 'Simica'}}); 

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  } 

}
