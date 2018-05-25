import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FisioterapiaAplicadaPage } from '../pages/fisioterapia-aplicada/fisioterapia-aplicada';
import { DatabaseProvider } from '../providers/database/database';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
    rootPage:any = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dbProvider: DatabaseProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      dbProvider.createDatabase()
        .then(() => {
          this.openPage(splashScreen);
        })
        .catch(() => {
          this.openPage(splashScreen);
        });      
    });
  }

  private openPage(splashScreen: SplashScreen){
    splashScreen.hide();
    this.rootPage = FisioterapiaAplicadaPage;
  }
  
}
