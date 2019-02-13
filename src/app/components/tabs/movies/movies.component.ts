import { Component, OnInit } from '@angular/core';
import { CineService } from 'src/app/services/cine.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: any = {};
  subject = new Subject();

  constructor(private cineService: CineService) {
    this.cineService.read('movies').subscribe(
      data => { this.subject.next(data); },
      error => { console.log('error en el read'); }
    );
  }

  ngOnInit() {
    this.subject.subscribe(data => {
      console.log('mi data', data);
      this.movies = data;
    });
  }

}
