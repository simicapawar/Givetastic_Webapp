import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatStepper } from '@angular/material/stepper';
import { MAT_FORM_FIELD } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-dialog-company-info',
  templateUrl: './dialog-company-info.component.html',
  styleUrls: ['./dialog-company-info.component.css']
})
export class DialogCompanyInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
