import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {
  @Input() response
  constructor() { }

  ngOnInit(): void {
  }

}
