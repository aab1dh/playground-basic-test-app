import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponseComponent } from './response/response.component';



@NgModule({
  declarations: [ResponseComponent],
  imports: [
    CommonModule
  ],
  exports: [ResponseComponent]
})
export class QuestionnaireComponentsModule { }
