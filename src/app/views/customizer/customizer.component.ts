import { Component, OnInit } from '@angular/core';
import {CustomService} from '../../core/services/custom/custom.service';
import {CustomModel} from '../../core/models/Custom';


@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss'],
})
export class CustomizerComponent implements OnInit {
  private custom: CustomModel[];

  constructor(private customService: CustomService) {
  }

  option1 = {
    direction: 'horizontal',
    loop: true
  };

  option2 = {
    direction: 'vertical',
    loop: true
  };

  async ngOnInit() {
    const result = await this.customService.getAll();
    console.log(result.data);
    this.custom = result.data;
/*
    const add = await this.customService.add(

    )
    */
  }
}
