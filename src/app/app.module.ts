import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListarTestesPage } from '../pages/listar-testes/listar-testes';
import { CadastrarTestesPage } from '../pages/cadastrar-testes/cadastrar-testes';
import { FisioterapiaAplicadaPage } from '../pages/fisioterapia-aplicada/fisioterapia-aplicada';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SQLite } from '@ionic-native/sqlite'
import { DatabaseProvider } from '../providers/database/database';
import { TesteOrtopedicoProvider } from '../providers/teste-ortopedico/teste-ortopedico';
import { AnatomiaProvider } from '../providers/anatomia/anatomia';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    ListarTestesPage,
    CadastrarTestesPage,
    FisioterapiaAplicadaPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListarTestesPage,
    CadastrarTestesPage,
    FisioterapiaAplicadaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    DatabaseProvider,
    TesteOrtopedicoProvider,
    AnatomiaProvider
  ]
})
export class AppModule {}