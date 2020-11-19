import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FridgeComponent} from './fridge/fridge.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'fridge', component: FridgeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
