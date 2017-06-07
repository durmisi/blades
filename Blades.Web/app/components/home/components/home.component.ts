//import { ThingService } from './../../core/services/thing-data.service';
//import { Thing } from './../../models/thing';
import { Component, OnInit, HostListener, ViewChild } from '@angular/core';

import {GridsterConfig} from 'angular-gridster2';


import './home.component.css';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
 options: GridsterConfig;
  dashboard: Array<Object>;

  static eventStop(item:any, scope:any, event:any) {
    console.info('eventStop', item, scope);
  }

  static itemChange(item:any, scope:any) {
    console.info('itemChanged', item, scope);
  }

  static itemResize(item:any, scope:any) {
    console.info('itemResized', item, scope);
  }

  static itemInit(item:any) {
    console.info('itemInitialized', item);
  }

  ngOnInit() {
    this.options = {
      gridType: 'fit',
      compactUp: false,
      compactLeft: false,
      itemChangeCallback: HomeComponent.itemChange,
      itemResizeCallback: HomeComponent.itemResize,
      margin: 10,
      outerMargin: true,
      minCols: 1,
      maxCols: 100,
      minRows: 1,
      maxRows: 100,
      maxItemCols: 50,
      minItemCols: 1,
      maxItemRows: 50,
      minItemRows: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 250,
      fixedRowHeight: 250,
      draggable: {
        enabled: true,
        stop: HomeComponent.eventStop
      },
      resizable: {
        enabled: true,
        stop: HomeComponent.eventStop
      },
      swap: false,
      displayGrid: 'onDrag&Resize'
    };

    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 2, y: 0, x: 2, hasContent: true},
      {cols: 1, rows: 1, y: 0, x: 4},
      {cols: 1, rows: 1, y: 2, x: 5},
      {cols: undefined, rows: undefined, y: 1, x: 0},
      {cols: 1, rows: 1, y: undefined, x: undefined},
      {cols: 2, rows: 2, y: 3, x: 5, minItemRows: 2, minItemCols: 2, label: 'Min rows & cols = 2'},
      {cols: 2, rows: 2, y: 2, x: 0, maxItemRows: 2, maxItemCols: 2, label: 'Max rows & cols = 2'},
      {cols: 2, rows: 1, y: 2, x: 2, dragEnabled: true, resizeEnabled: true, label: 'Drag&Resize Enabled'},
      {cols: 1, rows: 1, y: 2, x: 4, dragEnabled: false, resizeEnabled: false, label: 'Drag&Resize Disabled'},
      {cols: 1, rows: 1, y: 2, x: 6, initCallback: HomeComponent.itemInit}
    ];
  }

  changedOptions() {
    this.options.optionsChanged();
  }

  removeItem($event:any, item:any ) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({});
  }

  //public addThing() {
  //    this.dataService
  //        .Add(this.thing)
  //        .subscribe(() => {
  //            this.getAllThings();
  //            this.thing = new Thing();
  //        }, (error) => {
  //            console.log(error);
  //        });
  //}

  //public deleteThing(thing: Thing) {
  //    this.dataService
  //        .Delete(thing.id)
  //        .subscribe(() => {
  //            this.getAllThings();
  //        }, (error) => {
  //            console.log(error);
  //        });
  //}

  //private getAllThings() {
  //    this.dataService
  //        .GetAll()
  //        .subscribe(
  //        data => this.things = data,
  //        error => console.log(error),
  //        () => console.log('Get all complete')
  //        );
  //}
}
