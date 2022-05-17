import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { EmailNewsletterComponent } from './email-newsletter/email-newsletter.component';
import { HomeComponent } from './home/home.component';
import { ReactiveNewslatterComponent } from './reactive-newslatter/reactive-newslatter.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'lib-reactive-newslatter',
    component: ReactiveNewslatterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
