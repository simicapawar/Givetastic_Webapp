import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'

import { Donation } from '../models/donation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  donations: Observable<Donation[]>;

  donationsCollection: AngularFirestoreCollection<Donation>;


  constructor(public afs: AngularFirestore) { 
    this.donations = this.afs.collection('donation').valueChanges();
  }

  getDonations() {
    return this.donations; 
  }
}

