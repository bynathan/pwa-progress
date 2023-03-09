import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstablishmentsComponent } from './establishments.component';
import { PlaceDetailsComponent } from './components/place-details/place-details.component';

const routes: Routes = [
  { path: '', component: EstablishmentsComponent },
  { path: 'details/:id', component: PlaceDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstablishmentsRoutingModule {}
