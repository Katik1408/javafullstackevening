import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() messagefromparent;
  @Output() messagetoparent = new EventEmitter();
  datatosend;
  constructor() {}

  ngOnInit(): void {}

  sendDataToParent() {
    this.messagetoparent.emit(this.datatosend);
  }
}
