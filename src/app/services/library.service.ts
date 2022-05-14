import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BookDetails } from '../BookDetails';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  // configUrl = 'http://216.10.245.166//Library/GetBook.php?AuthorName=Shetty1';
  configUrl = 'https://raw.githubusercontent.com/actionanand/json-server/main/db/api/ng-dev-testing/library.json';

  constructor(private http : HttpClient) { }

  getBookDetails() : Observable<BookDetails[]> {
    return this.http.get<BookDetails[]>(this.configUrl);
  }

  addBook() {
    
  }

}
