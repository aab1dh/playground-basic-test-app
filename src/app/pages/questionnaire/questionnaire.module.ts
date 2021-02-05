import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { QuestionnaireRoutingModule } from './questionnaire.routing.module';
import { QuestionnaireComponentsModule } from './components/components.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

const materialModules = [
  MatButtonModule, MatRadioModule, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule
];

@NgModule({
  declarations: [QuestionnaireComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, ...materialModules,
    SharedModule,
    RouterModule,
    QuestionnaireRoutingModule,
    QuestionnaireComponentsModule,
  ],
  exports: [QuestionnaireComponent]
})
export class QuestionnaireModule { }
