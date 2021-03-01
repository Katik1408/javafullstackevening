import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent implements OnInit {
  order = 1;
  constructor() {
    console.log('Inside Constructor and order is ' + this.order++);
  }
  ngOnDestroy(): void {
    console.log('Inside OnDestroy and order is ' + this.order++);
  }
  ngOnChanges(): void {
    console.log('Inside onChanges and order is ' + this.order++);
  }
  ngAfterViewInit(): void {
    console.log('Inside AfterViewInit and order is ' + this.order++);
  }
  ngDoCheck(): void {
    console.log('Inside DoCheck and order is ' + this.order++);
  }
  ngAfterContentChecked(): void {
    console.log('Inside AfterContentChecked and order is ' + this.order++);
  }
  ngAfterContentInit(): void {
    console.log('Inside  AfterContentInit and order is ' + this.order++);
  }
  ngAfterViewChecked(): void {
    console.log('Inside  AfterViewChecked and order is ' + this.order++);
  }

  ngOnInit(): void {
    console.log('Inside OnInit and order is ' + this.order++);
  }
}
