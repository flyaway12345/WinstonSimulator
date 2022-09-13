import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { WinstonComponent } from './body/winston/winston.component';
import { BaseComponent } from './body/winston/base/base.component';
import { RouterModule } from '@angular/router';
import { PanelComponent } from './body/panel/panel.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    WinstonComponent,
    BaseComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: BaseComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
