import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListarTestesPage } from '../pages/listar-testes/listar-testes';
import { CadastrarTestesPage } from '../pages/cadastrar-testes/cadastrar-testes';
import { FisioterapiaAplicadaPage } from '../pages/fisioterapia-aplicada/fisioterapia-aplicada';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ListarTestesPage,
    CadastrarTestesPage,
    FisioterapiaAplicadaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListarTestesPage,
    CadastrarTestesPage,
    FisioterapiaAplicadaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}