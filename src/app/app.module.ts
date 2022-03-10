import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';

import { environment } from 'src/environments/environment';
import {MatButtonModule} from '@angular/material/button';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatSlideToggleModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,'giva-assignment')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
