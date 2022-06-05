import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digimons',
  templateUrl: './digimons.component.html',
  styleUrls: ['./digimons.component.css']
})
export class DigimonsComponent implements OnInit {

  name:String = "";	
  img:String = "";	
  level:String = "";	

  constructor() { }

  ngOnInit() {
  }

}
