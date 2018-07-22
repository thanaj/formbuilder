import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input('group') inputGroup: FormGroup;
  answersArray = [
    'Yes / No',
    'Text',
    'Number'
  ]
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  addInput() {
    const inputArray = <FormArray>this.inputGroup.controls['subInputs'];
    const newInput = this.initInput();

    inputArray.push(newInput);
  }

  removeInput(idx: number) {
    const inputArray = <FormArray>this.inputGroup.controls['subInputs'];
    inputArray.removeAt(idx);
  }

  initInput() {
    return this.fb.group({
      condition: '',
      answer:'',
      question:'',
      type:''
    });
  }
}
