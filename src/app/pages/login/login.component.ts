import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../././../pages/signup/signup.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  //status
  sended: boolean = false;
  spinner: boolean = false;
  error: string = '';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
    this.form = this.fb.group({
      mail: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  forgotPass() {
    this.router.navigate(['/auth/recovery']);
  }

  fillForm(user: string) {
    switch (user) {
      case 'admin':
        this.form.controls['mail'].setValue('admin@admin.com');
        this.form.controls['password'].setValue('admin1');
        break;
      case 'comprador':
        this.form.controls['mail'].setValue('comprador@comprador.com');
        this.form.controls['password'].setValue('comprador');
        break;
      case 'vendedor':
        this.form.controls['mail'].setValue('vendedor@vendedor.com');
        this.form.controls['password'].setValue('vendedor');
        break;
    }
  }

  cancel() {
    this.router.navigate(['/home']);
  }

  send() {
    this.sended = true;
    if (this.form.valid) {
      this.spinner = true;
      this.auth
        .signIn(
          this.form.controls['mail'].value,
          this.form.controls['password'].value
        )
        .then(() => {
          this.cancel();
        })
        .catch((e) => {
          this.error = e.message;
        })
        .finally(() => {
          this.spinner = false;
        });
    }
  }
}
