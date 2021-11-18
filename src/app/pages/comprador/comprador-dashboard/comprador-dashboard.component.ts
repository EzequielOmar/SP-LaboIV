import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-comprador-dashboard',
  templateUrl: './comprador-dashboard.component.html',
  styleUrls: ['./comprador-dashboard.component.scss'],
})
export class CompradorDashboardComponent implements OnInit {
  user?: any;
  dropMenu: boolean = false;
  active: number = -1;

  constructor(private auth: AuthService) {
    this.user = this.auth.currentUser;
  }

  ngOnInit(): void {}

  setActive(selected: number) {
    this.active = selected;
  }

  signOut() {
    this.auth.signOut(this.user.uid, this.user.multiFactor.user.tipo);
  }
}
