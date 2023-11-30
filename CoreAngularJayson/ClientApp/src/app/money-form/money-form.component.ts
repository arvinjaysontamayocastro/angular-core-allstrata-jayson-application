import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Money } from './money.model';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'money-form',
  templateUrl: './money-form.component.html',
  styleUrls: ['./money-form.component.css'],
  imports: [ReactiveFormsModule],
  standalone: true
})
export class MoneyFormComponent {

  public moneyForm: FormGroup;

  constructor(private route: ActivatedRoute, public router : Router, private formBuilder: FormBuilder, http: HttpClient, @Inject('API_BASE_URL') baseUrl: string) {
    this.moneyForm = this.formBuilder.group({
      amount: [0, Validators.required]
    });
  }

  onSubmit() {
    this.router.navigate(['/money-converter'], { queryParams: { amount: this.moneyForm.controls.amount.value } });
  }
}

