import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  id: string = "0";
  @Input()
  photoCover: string = "";
  @Input()
  cardSubtitle: string = "";
  @Input()
  cardTitle: string = "";
  @Input()
  cardDescription: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
