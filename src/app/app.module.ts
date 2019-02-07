import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';


const ROUTES = [
  {
    path: '',
    // component: LoginComponent,
    pathMatch: 'full'
  },
]
=======
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
>>>>>>> 5de4c3ec57226947131f9f5bd4bb2c35a030d9ad

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,

    AngularFireAuthModule,

    AngularFireModule.initializeApp(environment.fireConfig),
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
