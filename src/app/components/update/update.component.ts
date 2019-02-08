import { Component, OnInit } from '@angular/core';
import { CineService } from 'src/app/services/cine.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private cineService: CineService) {
    this.cineService.update('actors', '-LY9ubZExn4UrP3oya8d', {
      name: 'kev',
      age: 20,
      nationality: 'canadian',
      gender: 'male'
    });
   }

  ngOnInit() {
  }

}
