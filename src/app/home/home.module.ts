import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
