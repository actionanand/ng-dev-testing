import { Component, OnInit } from '@angular/core';

import { BookDetails } from '../../model/BookDetails';
import { LibraryService } from '../../services/library.service';

@Component({
  selector: 'app-library-dashboard',
  templateUrl: './library-dashboard.component.html',
  styleUrls: ['./library-dashboard.component.css']
})
export class LibraryDashboardComponent implements OnInit {

  bookDetails :BookDetails[];
  constructor(private libServ :LibraryService) { }

  ngOnInit(): void {

    
  this.libServ.getBookDetails().subscribe(data=> this.bookDetails = data);
    
  console.log(this.bookDetails);

  }

}
