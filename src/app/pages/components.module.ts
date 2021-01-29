import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const materialModules = [
  MatButtonModule, MatRadioModule, MatCardModule, MatInputModule
];
@NgModule({
  declarations: [QuestionnaireComponent, HomeComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MatTableModule,
    ...materialModules,
    SharedModule, ReactiveFormsModule
  ],
  exports: [QuestionnaireComponent, HomeComponent]
})
export class ComponentsModule { }
