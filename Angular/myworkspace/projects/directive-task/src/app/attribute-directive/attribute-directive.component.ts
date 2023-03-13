import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myclass:boolean=true;
  hideclass:boolean=true;
}
