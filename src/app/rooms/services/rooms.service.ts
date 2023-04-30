import { environment } from './../environments/environment';
import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appConfig.service';
import { AppConfig } from 'src/app/AppConfig/appConfig.interface';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'A',
      amenities: 'AC,Wifi',
      price: 50000,
      photos:
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      checkinTime: new Date('24-Apr-2023'),
      checkoutTime: new Date('25-Apr-2023'),
      rating: 4.5,
    },
    {
      roomNumber: 2,
      roomType: 'B',
      amenities: 'AC,Wifi,TV',
      price: 70000,
      photos:
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      checkinTime: new Date('24-Apr-2023'),
      checkoutTime: new Date('25-Apr-2023'),
      rating: 3.5,
    },
    {
      roomNumber: 3,
      roomType: 'C',
      amenities: 'AC,Wifi,TV,Double-Bead',
      price: 500000,
      photos:
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      checkinTime: new Date('24-Apr-2023'),
      checkoutTime: new Date('25-Apr-2023'),
      rating: 4.6,
    },
  ];
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log(this.config.apiEndpoint);
    console.log('Room service Initialized...');
  }

  getRooms() {
    return this.roomList;
  }
}
