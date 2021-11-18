import { Directive, ElementRef, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Directive({
  selector: '[appUserName]',
})
export class UserNameDirective {
  sub?: Subscription;
  email: string = '';

  constructor(el: ElementRef, private Auth: AuthService) {
    this.sub = this.Auth.authUserObservable.subscribe((u) => {
      this.email = u?.email ?? '';
      if (this.email) el.nativeElement.innerText = this.email;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
