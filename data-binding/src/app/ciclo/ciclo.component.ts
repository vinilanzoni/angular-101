import { 
  Component, 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy, 
  Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy {

  @Input()
  valorInicial: number = 10;

  constructor() {
    this.log('Constructor');
  }

  ngOnInit() {
    this.log('On Init');
  }

  ngOnChanges() {
    this.log('On Changes');
  }

  ngDoCheck() {
    this.log('Do Check');
  }

  ngAfterContentInit() {
    this.log('AfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('AfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('AfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('AfterViewChecked');
  }

  ngOnDestroy() {
    this.log('OnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
