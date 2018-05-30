import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';
import { StaticModule } from './static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//firebase
import { environment } from '../environments/environment';
//import { AngularFireModule } from 'angularfire2';
//export const firebaseConfig = environment.firebaseConfigs;
//import { AngularFirestoreModule } from 'angularfire2/firestore';

//google
//import { GoogleMapModule } from './google-map/google-map.module'

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,

    // features
    StaticModule,
    SettingsModule,

    // app
    AppRoutingModule,

    //FireBase
   // AngularFireModule.initializeApp(firebaseConfig),
  
    /*AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    })*/
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
