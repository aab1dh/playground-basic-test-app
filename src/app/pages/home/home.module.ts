import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { HomeRoutingModule } from './home.routing.module';

const materialModules = [
  MatTableModule, MatButtonModule
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, ...materialModules, SharedModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
