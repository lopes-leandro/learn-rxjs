import { Component, OnInit } from '@angular/core';
import { IconService, Notification } from 'carbon-components-angular';
import Notification20 from '@carbon/icons/es/notification/20';
import UserAvatar20 from '@carbon/icons/es/user--avatar/20';
import AirportLocation20 from '@carbon/icons/es/airport-location/20';
import AirportLocation24 from '@carbon/icons/es/airport-location/24';
import AirportLocation32 from '@carbon/icons/es/airport-location/32';

@Component({
  selector: 'learn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private iconService: IconService){}
  ngOnInit(): void {
    this.iconService.registerAll([Notification20, UserAvatar20, AirportLocation20, AirportLocation24, AirportLocation32]);
  }
}
