// Impot Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import Route Components
import { SeattleComponent } from './seattle/seattle.component';
import { BurbankComponent } from './burbank/burbank.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';

const routes: Routes = [
  { path: 'seattle',component: SeattleComponent },
  { path: 'burbank',component: BurbankComponent },
  { path: 'sanjose',component: SanJoseComponent },
  { path: 'dallas',component: DallasComponent },
  { path: 'dc',component: DcComponent },
  { path: 'chicago',component: ChicagoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
