import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
@Component({
  selector: 'questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit, AfterViewInit {
  patientForm: FormGroup
  result: any
  constructor(private fb: FormBuilder, public qns: QuestionnaireService) {
  }

  ngOnInit(): void {
  }

  async ngAfterViewInit(): Promise<void> {
    setTimeout(() => {
      const group = {}
      this.qns.fields.item.forEach(field => {
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
    }, 500);
  }

  async submitForm(result): Promise<void> {
    console.log(result)
    this.result = {};
    let res: any = {}
    res = { ...this.qns.fields }
    let keys = []
    keys = Object.keys(result.form.value)
    keys.forEach((key, index) => {
      keys[index] = {
        [key]: result.form.value[key]
      }
    })

    keys.forEach((val, index) => {
      Object.keys(keys[index]).forEach((parent, index, arr) => {
        if (parent.match(/[A-Za-z]+/g).toString() === 'boolean') res.item[Number(parent.match(/\d+/g)[0]) - 1].answer = {
          valueBoolean: val[parent]
        }

        if (parent.match(/[A-Za-z]+/g).toString() === 'group') {
          arr.forEach((group, index, arrin) => {
            const innerkeys = Object.keys(val[group])
            innerkeys.forEach((child, index, arrinner) => {
              if (child.match(/[A-Za-z]+/g)[0].toString() === 'boolean') res.item[(Number(child.match(/\d+/g)[0]) - 1)].item[Number(child.substr(child.indexOf('.') + 1)) - 1].answer = {
                valueBoolean: val[parent][child]
              }

              if (child.match(/[A-Za-z]+/g)[0].toString() === 'string') res.item[(Number(child.match(/\d+/g)[0]) - 1)].item[Number(child.substr(child.indexOf('.') + 1)) - 1].answer = {
                valueString: val[parent][child]
              }

              if (child.match(/[A-Za-z]+/g)[0].toString() === 'date') res.item[(Number(child.match(/\d+/g)[0]) - 1)].item[Number(child.substr(child.indexOf('.') + 1)) - 1].answer = {
                valueDate: val[parent][child]
              }

            })

          })
        }

      })
    })
    this.result = res

  }


}
