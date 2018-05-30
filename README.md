# Dicas
CRUD Ionic 3 + Angular 4 + Firebase 4 + AngularFire2 4.0 + SQLite

#NodeJs 
https://nodejs.org/en/

#Ionic Cordova 
$ npm install -g cordova ionic@latest 
$ npm install -g cordova

#Iniciar projeto *modelo: blank, tabs ou sidemenu
$ ionic start <nomeProjeto> <modelo> 
$ cd ./meuProjeto 

#Comandos generate utilizados 
$ ionic g provider <nome-provider> 
$ ionic g page <nome-pagina> 

#Comandos úteis
https://ionicframework.com/docs/cli/generate/
   
#Firebase
$ npm install angularfire2 firebase --save 
$ npm install rxjs@6 rxjs-compat@6 --save.

#SQLite
$ ionic cordova plugin add cordova-sqlite-storage
$ npm install --save @ionic-native/sqlite

#Gerar SDK *platform: Android, IOS ou Windows
$ ionic cordova platform add <platform>  
$ ionic cordova build <platform>

#Executar direto no celular
$ ionic run <platform>

#Executa no browser
$ ionic serve --lab  
