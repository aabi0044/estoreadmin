import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
// Firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';



const ROUTES = [
  {
    redirectTo: 'login',
    path: '',
    pathMatch: 'full'
  },
  {
    
    path: 'dashboard',
    component: DashboardComponent,
    
  },
  {
    
    path: 'login',
    component: LoginComponent,
    
  },
]


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
