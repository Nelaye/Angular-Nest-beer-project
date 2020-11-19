import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FridgeComponent } from './fridge/fridge.component';
import { HomeComponent } from './home/home.component';
import {BeersComponent} from './beer/beers.component';
import {MatCardModule} from '@angular/material/card';
import { BeerLabelComponent } from './shared/beer-label/beer-label.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    FridgeComponent,
    HomeComponent,
    BeersComponent,
    BeerLabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
