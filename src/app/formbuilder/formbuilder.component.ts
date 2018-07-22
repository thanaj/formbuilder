import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {
  formbuilder: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formbuilder = this.fb.group({
      name: '',
      inputs: this.fb.array([])
    });
    //this.addInput();
  }
  initInput() {
    return this.fb.group({
      question: '',
      type:'',
      subInputs: this.fb.array([])
    });
  }
  addInput() {
    const inputArray = <FormArray>this.formbuilder.controls['inputs'];
    const newInput = this.initInput();

    inputArray.push(newInput);
  }
  removeInput(idx: number) {
    const inputsArray = <FormArray>this.formbuilder.controls['inputs'];
    inputsArray.removeAt(idx);
  }
}
