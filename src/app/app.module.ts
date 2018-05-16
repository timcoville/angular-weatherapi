import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Importing Components
import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { BurbankComponent } from './burbank/burbank.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';

// Importing Component Services
import { BurbankService } from './burbank/burbank.service';
import { ChicagoService } from './chicago/chicago.service';
import { DallasService } from './dallas/dallas.service';
import { DcService } from './dc/dc.service';
import { SanjoseService } from './san-jose/sanjose.service';
import { SeattleService } from './seattle/seattle.service';


@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    BurbankComponent,
    SanJoseComponent,
    DallasComponent,
    DcComponent,
    ChicagoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpService, 
    BurbankService,
    ChicagoService,
    DallasService,
    DcService,
    SanjoseService,
    SeattleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
