import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//Firebase
import { AngularFireModule } from "angularfire2";
import { TesteOrtopedicoProvider } from '../providers/teste-ortopedico/teste-ortopedico';
import { AddTestePage } from '../pages/add-teste/add-teste';
import { EditTestePage } from '../pages/edit-teste/edit-teste';
import { AnatomiaProvider } from '../providers/anatomia/anatomia';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyCDxaG0dknIfaoWTmO7Iy7WzBCZoFuPK8s",
  authDomain: "fisioterapia-aplicada.firebaseapp.com",
  databaseURL: "https://fisioterapia-aplicada.firebaseio.com",
  projectId: "fisioterapia-aplicada",
  storageBucket: "fisioterapia-aplicada.appspot.com",
  messagingSenderId: "858806391323"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddTestePage,
    EditTestePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddTestePage,
    EditTestePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TesteOrtopedicoProvider,
    AnatomiaProvider
  ]
})
export class AppModule {}
