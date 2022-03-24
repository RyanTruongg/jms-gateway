import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'car',
        data: { pageTitle: 'Cars' },
        loadChildren: () => import('./carsapp/car/car.module').then(m => m.CarsappCarModule),
      },
      {
        path: 'dealer',
        data: { pageTitle: 'Dealers' },
        loadChildren: () => import('./dealerapp/dealer/dealer.module').then(m => m.DealerappDealerModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
