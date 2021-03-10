import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BallCanvasComponent } from './ball-canvas/ball-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    BallCanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
