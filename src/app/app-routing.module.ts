import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'establishments',
    pathMatch: 'full',
  },
  {
    path: 'public',
    loadChildren: () =>
      import('./modules/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'private',
    loadChildren: () =>
      import('./modules/private/private.module').then((m) => m.PrivateModule),
  },
  {
    path: 'establishments',
    loadChildren: () =>
      import('./modules/establishments/establishments.module').then(
        (m) => m.EstablishmentsModule
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./modules/orders/orders.module').then((m) => m.OrdersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
