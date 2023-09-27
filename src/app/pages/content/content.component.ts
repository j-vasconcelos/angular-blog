import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/environments/environment.prod';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private id: string | null = "0";

  @Input()
  photoCover: string = "";
  @Input()
  contentSubtitle: string = "";
  @Input()
  contentTitle: string = "";
  @Input()
  contentDescription: string = "";

  constructor( private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
    this.id = value.get("id"))

    this.setValuesComponent(this.id)
  }


  setValuesComponent(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title;
    this.photoCover = result.photo;
    this.contentSubtitle = result.subTitle;
    this.contentDescription = result.description;
  }
}
