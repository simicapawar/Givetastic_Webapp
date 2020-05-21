import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatStepper } from '@angular/material/stepper';
import { MAT_FORM_FIELD } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';





@Component({
  selector: 'app-dialog-wallet',
  templateUrl: './dialog-wallet.component.html',
  styleUrls: ['./dialog-wallet.component.css']
})
export class DialogWalletComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
