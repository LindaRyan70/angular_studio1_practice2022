import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Instructor Jayde recommended always "typing" our variables by using the TS version below, even though the JS version below it also works (per Chpt 29.5.2.1). //
  missionName: string = "Mars 2030";
  rocketName: string = "Plasma Max"; 
  // missionName = "Mars 2030";
  // rocketName = "Plasma Max"; 
  constructor() { }

  ngOnInit(): void {
  }

}
