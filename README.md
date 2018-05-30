# CRUD Ionic 3 + Angular 4 + Firebase 4 + AngularFire2 4.0 + SQLite

Aplicativo com CRUD básico offline e online

## Configuração e inicialização

### NodeJs
https://nodejs.org/en/

### Ionic Cordova 

$ npm install -g cordova ionic@latest  
$ npm install -g cordova  

### Iniciar projeto
$ ionic start *nomeProjeto* *modelo*  
$ cd ./meuProjeto  

### Firebase

#### Online
$ npm install angularfire2 firebase    
$ npm install rxjs@6 rxjs-compat@6  

#### Offline
$ npm install angularfire2-offline angularfire2 firebase  
$ npm install firebase-admin  

### SQLite
$ ionic cordova plugin add cordova-sqlite-storage  
$ npm install --save @ionic-native/sqlite  

## Desenvolvimento

### Comandos 'generate' utilizados 
$ ionic g provider *nome-provider*   
$ ionic g page *nome-pagina*  

### Comandos úteis
https://ionicframework.com/docs/cli/generate/  
 
## Executar aplicativo

### Gerar SDK - desenvolvimento
$ ionic cordova platform add *platform*  
$ ionic cordova build *platform*  

### No celular
$ ionic run *platform*  

### No browser
$ ionic serve --lab    

## Informações

### Modelo **start**  
* [blank] - vazio
* [tabs] - menu no rodapé
* [sidemenu] - menu lateral

### Tipos **platform**
* [Android]
* [IOS]
* [Windows]
