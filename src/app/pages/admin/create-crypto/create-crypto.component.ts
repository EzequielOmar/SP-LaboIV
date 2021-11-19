import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coin } from 'src/app/interfaces/coin';
import { CoinsService } from 'src/app/services/coins/coins.service';

@Component({
  selector: 'app-create-crypto',
  templateUrl: './create-crypto.component.html',
  styleUrls: ['.././.././../pages/signup/signup.component.scss'],
})
export class CreateCryptoComponent implements OnInit {
  currency: FormGroup;
  //status
  sended: boolean = false;
  spinner: boolean = false;
  error: string = '';
  success: boolean = false;

  constructor(private fb: FormBuilder, private cs: CoinsService) {
    this.currency = this.fb.group({
      nombre: ['', Validators.required],
      costoActual: ['', Validators.required],
      comision: ['', Validators.required],
      año: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  send() {
    this.sended = true;
    if (this.currency.valid) {
      this.spinner = true;
      this.cs
        .writeCoin(this.currency.value as Coin)
        .then(() => {
          this.success = true;
        })
        .catch((err) => {
          this.error = err;
        })
        .finally(() => {
          this.spinner = false;
          setTimeout(() => {
            this.success = false;
          }, 3000);
        });
    }
  }
}
