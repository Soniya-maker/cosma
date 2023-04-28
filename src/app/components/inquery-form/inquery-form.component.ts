import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-inquery-form',
  templateUrl: './inquery-form.component.html',
  styleUrls: ['./inquery-form.component.scss']
})
export class InqueryFormComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    public commonService: CommonService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      client_name: ['', Validators.required],
      proj_name: ['', [Validators.required, Validators.email]],
      job_desc: ['', [Validators.required]],
      due_date: ['', Validators.compose([Validators.required])],
      file: ['', [Validators.required]],
    },
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registerForm.value);
    }
  }
}
