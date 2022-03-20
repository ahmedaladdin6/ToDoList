import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { AddListComponent } from './pages/add-list/add-list.component';
import { AllListComponent } from './pages/all-list/all-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {landingListComponent } from './landing-list.component';



@NgModule({
  declarations: [ AddListComponent, AllListComponent,landingListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ListModule { }
