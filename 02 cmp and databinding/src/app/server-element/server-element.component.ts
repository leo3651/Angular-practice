import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('paragraphContent', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('--- Constructor called ---');
    console.log(this.header); // undefined
  }

  ngOnInit() {
    console.log('--- NgOnInit called ---');
    console.log(this.header);
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log(
      'Text content of the paragraph: ' +
        this.paragraph.nativeElement.textContent
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('--- ngOnChanges called ---');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('--- ngDoCheck called ---');
  }

  ngAfterContentInit() {
    console.log('--- ngAfterContentInit ---');
    console.log(
      'Text content of the paragraph: ' +
        this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentChecked() {
    console.log('--- ngAfterContentChecked ---');
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log('--- ngAfterViewInit ---');
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('--- ngAfterViewChecked ---');
  }

  ngOnDestroy() {
    console.log('--- ngOnDestroy ---');
  }
}
