import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FileService } from 'src/app/services/file/file.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  //forms
  user: FormGroup;
  pass: FormGroup;
  files: Array<File> = [];
  //status
  sended: boolean = false;
  spinner: boolean = false;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private file: FileService
  ) {
    this.pass = this.fb.group({
      password: ['', Validators.required],
      passCheck: ['', Validators.required],
    });
    this.user = this.fb.group({
      mail: ['', Validators.required],
      img_urls: [[]],
      tipo: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  cancel() {
    this.router.navigate(['/home']);
  }

  goToLogin() {
    this.router.navigate(['auth/login']);
  }

  handleFileSelect(event: Array<File>) {
    this.files = event;
  }

  send() {
    this.sended = true;
    if (this.validateForms()) {
      this.spinner = true;
      let user = this.user.value;
      user.tipo = parseInt(user.tipo);
      this.auth
        .signUp(user, this.pass.controls['password'].value)
        .then((res) => {
          this.file
            .handleFiles(user, res.user?.uid ?? '', this.files)
            .then(() => {
              this.auth.manageUserData(user, res).then(() => {
                this.auth.signOut().then(() => {
                  this.goToLogin();
                });
              });
            });
        })
        .catch((e) => {
          this.error = e.message;
        })
        .finally(() => {
          this.spinner = false;
        });
    }
  }

  private validateForms() {
    return (
      this.files.length > 0 &&
      this.user.valid &&
      this.pass.valid &&
      this.pass.controls['password'].value ===
        this.pass.controls['passCheck'].value
    );
  }
}
