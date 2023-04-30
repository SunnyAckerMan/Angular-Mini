import {
  Component,
  ViewContainerRef,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
  Optional,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { ViewChild, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.name.nativeElement.innerText = 'Dhaka Hotel';
  }
  ngAfterViewInit(): void {}
  title = 'Hotel-App';
  @ViewChild('name', { static: true }) name!: ElementRef;
 
}
