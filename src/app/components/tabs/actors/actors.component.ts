import { Component, OnInit } from '@angular/core';
import { CineService } from 'src/app/services/cine.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  actors: any[];
  promise: Promise<any[]>;

  constructor(private cineService: CineService) { }

  ngOnInit() {
    this.cineService.read('actors').subscribe(data => {
      const promiseX: Promise<any[]> = new Promise((resolve, reject) => {
        if (data.length > 0) {
          resolve(data);
        } else {
          reject('no data');
        }
      });
      this.promise = promiseX;
      this.promise.then(data1 => {
        this.actors = data1;
      }).catch(
        error => console.log(error)
      );
    });

  }

}
