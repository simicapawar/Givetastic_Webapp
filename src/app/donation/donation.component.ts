import { Component, OnInit } from '@angular/core';

import { DonationService } from '../services/donation.service';
import { Donation } from '../models/donation';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  donations: Donation[];

  constructor(public donationService: DonationService) { }

  ngOnInit(): void {
    this.donationService.getDonations().subscribe(donations => {
      this.donations = donations;
    });
  }

}
