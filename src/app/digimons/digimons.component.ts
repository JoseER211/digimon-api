import { Component, OnInit } from '@angular/core';
import { DigimonsService } from '../digimons.service';

@Component({
  selector: 'app-digimons',
  templateUrl: './digimons.component.html',
  styleUrls: ['./digimons.component.css'],
})
export class DigimonsComponent implements OnInit {
  digimons: any;

  constructor(private digimonsService: DigimonsService) {}

  ngOnInit() {
    this.digimonsService.getDigimons().subscribe(
      (data) => {
        this.digimons = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
