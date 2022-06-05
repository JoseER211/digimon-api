import { Component, OnInit } from '@angular/core';
import { DigimonsService } from './digimons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'digimonApp';
  digimons:any;
  

  constructor(private digimonsService: DigimonsService) { 
    
    
  }
  ngOnInit() {
    this.digimonsService.getDigimons().subscribe(
      (data) => {
        this.digimons = data; console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
