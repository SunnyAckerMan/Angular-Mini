import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  hiderooms = false;
  hotelname = 'DHAKA HOTEL';
  numberofRooms = 10;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = 'Room List';
  roomList: RoomList[] = [];
  @ViewChild(HeaderComponent)
  HeaderComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;
  //roomService = new RoomService();
  constructor(@SkipSelf() private roomsService: RoomsService) {}

  ngAfterViewChecked(): void {}
  ngAfterViewInit(): void {
    this.HeaderComponent.title = 'Rooms View';
    console.log((this.headerChildrenComponent.last.title = 'Last Title'));
  }
  ngDoCheck() {
    console.log('On Changes is Called');
  }
  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
    //console.log(this.HeaderComponent);
  }

  toggle() {
    this.hiderooms = !this.hiderooms;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'A',
      amenities: 'AC,Wifi',
      price: 50000,
      photos:
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      checkinTime: new Date('24-Apr-2023'),
      checkoutTime: new Date('25-Apr-2023'),
      rating: 4.5,
    };
    this.roomList = [...this.roomList, room];
  }
}
