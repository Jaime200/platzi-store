import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'platzi-Store';
  power: number = 10;
  itemsArr = ['jaime', 'fredy', 'harold'];
  objeto = {};
  constructor() { }

  ngOnInit() {
  }


 
  addItem() {
    this.itemsArr.push('nuevo Item');
  }

  deleteItem(index: number) {
    this.itemsArr.splice( index, 1);
  }


}
