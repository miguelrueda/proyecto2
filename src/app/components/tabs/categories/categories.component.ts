import { Component, OnInit } from '@angular/core';
import { CineService } from 'src/app/services/cine.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: any = {};
  subject = new Subject();

  constructor(private cineService: CineService) {
    this.cineService.read('categories').subscribe(
      data => { this.subject.next(data); },
      error => { console.log('error en el read'); }
    );
   }

  ngOnInit() {
    this.subject.subscribe(data => {
      console.log('mi data', data);
      this.categories = data;
    });
  }

}
