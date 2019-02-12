import { Component, OnInit } from '@angular/core';
import { CineService } from 'src/app/services/cine.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private cineService: CineService) {
    // this.cineService.create('actors', {
    //   name: 'kevin',
    //   age: 20,
    //   nationality: 'mexican',
    //   gender: 'male'
    // });
   }

  ngOnInit() {
  }

}
