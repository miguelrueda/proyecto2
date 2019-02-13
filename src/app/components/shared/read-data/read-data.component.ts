import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-read-data',
  templateUrl: './read-data.component.html',
  styleUrls: ['./read-data.component.scss']
})
export class ReadDataComponent implements OnInit {

  @Input() actor: any;
  @Input() movie: any;
  @Input() category: any;

  constructor() { }

  ngOnInit() {
  }

}
