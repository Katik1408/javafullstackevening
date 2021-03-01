import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnChanges,
    OnDestroy {
  @Input() messagefromparent;
  @Output() messagetoparent = new EventEmitter();
  datatosend;

  //data = 1;

  constructor() {
    console.log('Inside Constructor and data is ' + this.messagefromparent);
  }
  ngOnDestroy(): void {
    console.log('Inside OnDestroy and data is ' + this.messagefromparent);
  }
  ngOnChanges(): void {
    console.log('Inside onChanges and data is ' + this.messagefromparent);
  }
  ngAfterViewInit(): void {
    console.log('Inside AfterViewInit and data is ' + this.messagefromparent);
  }
  ngDoCheck(): void {
    console.log('Inside DoCheck and data is ' + this.messagefromparent);
  }
  ngAfterContentChecked(): void {
    console.log(
      'Inside AfterContentChecked and data is ' + this.messagefromparent
    );
  }
  ngAfterContentInit(): void {
    console.log(
      'Inside  AfterContentInit and data is ' + this.messagefromparent
    );
  }
  ngAfterViewChecked(): void {
    console.log(
      'Inside  AfterViewChecked and data is ' + this.messagefromparent
    );
  }

  ngOnInit(): void {
    console.log('Inside OnInit and data is ' + this.messagefromparent);
  }

  sendDataToParent() {
    this.messagetoparent.emit(this.datatosend);
  }
}
