import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DigimonsService } from './digimons.service';
import { DigimonsComponent } from './digimons/digimons.component';

@NgModule({
  declarations: [	
    AppComponent,
      DigimonsComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DigimonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
