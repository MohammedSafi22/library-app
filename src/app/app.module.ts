import { NgModule } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app'
import {provideFirestore, getFirestore} from '@angular/fire/firestore'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { EmailNewsletterComponent } from './email-newsletter/email-newsletter.component';
import { HomeComponent } from './home/home.component';
import { ReactiveNewslatterComponent } from './reactive-newslatter/reactive-newslatter.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    EmailNewsletterComponent,
    HomeComponent,
    ReactiveNewslatterComponent
  ],
  imports: [
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideFirestore(()=>getFirestore()),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
