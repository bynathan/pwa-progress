import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstablishmentsModel } from '../../models/establishments.model';
import { EstablishmentsService } from 'src/app/core/services/establishments.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.scss'],
})
export class PlaceDetailsComponent implements OnInit {
  place!: EstablishmentsModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private establishmentsService: EstablishmentsService
  ) {}

  ngOnInit() {
    this.getEstablishmentDetails();
  }

  getEstablishmentDetails() {
    const id = this.activatedRoute.snapshot.params['id'];

    this.establishmentsService.getEstablishmentDetails(id).subscribe((data) => {
      this.place = data.payload;
    });
  }
}
