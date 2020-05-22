import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* 
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire'; */

import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DonationComponent } from './donation/donation.component';

import { DonationService } from './services/donation.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DialogWalletComponent } from './dialog-wallet/dialog-wallet.component';
import { DialogCompanyInfoComponent } from './dialog-company-info/dialog-company-info.component';

import { ColorPickerModule } from 'ngx-color-picker';

 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationBarComponent,
    DonationComponent,
    DialogWalletComponent,
    DialogCompanyInfoComponent,
  ],
  entryComponents: [DialogWalletComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    ColorPickerModule
  ],
  providers: [DonationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
