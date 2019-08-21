import { environment } from '@environment';

// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Socket.IO
//import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    /*
    SocketIoModule.forRoot({
      'url': environment.server,
      options: {  
      }
    })
    */
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
