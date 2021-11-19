import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//env
import { environment } from '../environments/environment';
//firebase
import { AngularFireModule } from '@angular/fire/compat';
//modules
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponentsModule } from './modules/shared-components/shared-components.module';
import { UserNameDirective } from './directives/user-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    UserNameDirective,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SharedComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
