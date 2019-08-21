import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
//import { Socket } from 'ngx-socket-io';


@Component({
  selector: 'app',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit  {

  //public bridgeStatus$;

  constructor(
    //private socket: Socket
    ) {}

  ngOnInit() {
   // this.bridgeStatus$ = this.socket.fromEvent<any>('bridgeStatus');
  }
}


