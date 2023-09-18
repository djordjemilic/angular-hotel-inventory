import {Component, OnInit} from '@angular/core';
import {Room, RoomList} from "./rooms.interface";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 15
  }

  roomList: RoomList[] = []

  constructor() {
  }

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 101,
        roomType: 'Deluxe Room',
        amenities: 'TV, AC, WiFi, etc',
        price: 5000,
        photos: 'https://picsum.photos/200/300',
        checkInTime: new Date('11-Nov-2020 10:00 AM'),
        checkOutTime: new Date('11-Nov-2020 12:00 PM')
      },
      {
        roomNumber: 102,
        roomType: 'Super Deluxe Room',
        amenities: 'TV, AC, WiFi, etc',
        price: 5000,
        photos: 'https://picsum.photos/200/300',
        checkInTime: new Date('11-Nov-2020 10:00 AM'),
        checkOutTime: new Date('11-Nov-2020 12:00 PM')
      },
      {
        roomNumber: 103,
        roomType: 'Super Deluxe Room',
        amenities: 'TV, AC, WiFi, etc',
        price: 5000,
        photos: 'https://picsum.photos/200/300',
        checkInTime: new Date('11-Nov-2020 10:00 AM'),
        checkOutTime: new Date('11-Nov-2020 12:00 PM')
      },
    ]
  }

  toggleRooms() {
    this.hideRooms = !this.hideRooms;
  }

}
