import { Injectable } from '@angular/core';
import { collectionData, doc, Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private firestore:Firestore) { }


  getAll():Observable<Book[]>{
    const col=collection(this.firestore,'books');
    return collectionData(col,{idField:'id'}) as Observable<Book[]>;
  }
  create(book:Book){
    const col = collection(this.firestore,'books');
    return addDoc(col,book)

  }
}
