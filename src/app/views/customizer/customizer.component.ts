import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss'],
})
export class CustomizerComponent implements OnInit {

  constructor() { }

  option1 = {
    direction: 'horizontal',
    loop: true
  };

  option2 = {
    direction: 'vertical',
    loop: true
  };

  ngOnInit() {}


}
