import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDatepicker,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['.././../pages/signup/signup.component.scss'],
})
export class FormPersonaComponent implements OnInit {
  @Input() person?: FormGroup;
  @Input() pass?: FormGroup;
  @Input() sended!: boolean;
  @Input() files!: Array<File>;
  @Output() filesSelected: EventEmitter<Array<File>> = new EventEmitter<
    Array<File>
  >();
  maxAge: number = 99;
  minAge: number = 18;
  constructor() {}

  ngOnInit(): void {}

  getImage(event: any) {
    this.files = Array.from(event.target.files);
    this.filesSelected?.emit(this.files);
  }

  getMinDate() {
    return {
      year: new Date().getFullYear() - this.maxAge,
      month: new Date().getMonth(),
      day: new Date().getDate(),
    };
  }

  getMaxDate() {
    return {
      year: new Date().getFullYear() - this.minAge,
      month: new Date().getMonth(),
      day: new Date().getDate(),
    };
  }
}
