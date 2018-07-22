import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subinput',
  templateUrl: './subinput.component.html',
  styleUrls: ['./subinput.component.css']
})
export class SubinputComponent implements OnInit {
  @Input('group') subInputGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
