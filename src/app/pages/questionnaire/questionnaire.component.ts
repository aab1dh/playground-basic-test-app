import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  patientForm: FormGroup
  constructor(private fb: FormBuilder, public qns: QuestionnaireService) {

    setTimeout(() => {
      const group = {}
      this.qns.fields.forEach(field => {
        if (field.type === 'boolean') {
          group[`boolean${field.linkId}`] = [null, [Validators.required]]
        }
        if (field.type === 'group') {
          group[`group${field.linkId}`] = this.fb.group({})
          const groupId = `group${field.linkId}`;
          field.item.forEach(field => {
            if (field.type === 'string') group[`${groupId}`].addControl(`string${field.linkId}`, new FormControl(null, Validators.required))
            if (field.type === 'date') group[`${groupId}`].addControl(`date${field.linkId}`, new FormControl(new Date(), Validators.required))
            if (field.type === 'boolean') group[`${groupId}`].addControl(`boolean${field.linkId}`, new FormControl(null, Validators.required))
          })
        }
      })
      this.patientForm = this.fb.group(group)
    }, 0);

  }

  ngOnInit(): void {
  }

  submitForm(result): void {
    console.log(result);
  }

}
