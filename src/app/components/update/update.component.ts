import { Component, OnInit } from '@angular/core';
import { CineService } from 'src/app/services/cine.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private cineService: CineService) {
    this.cineService.create('actors', {
      name: 'kevin',
      age: 20,
      nationality: 'mexican',
      gender: 'male'
    });
   }

  ngOnInit() {
  }

}
