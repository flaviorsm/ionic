# ionic
CRUD Ionic 3 + Angular 4 + Firebase 4 + AngularFire2 4.0

Instalar o NodeJs
Instalar o Visual Code

$ npm install -g ionic@latest
$ ionic start meuProjeto blank
$ cd ./meuProjeto
$ npm install angularfire2 firebase --save
$ npm install rxjs@6 rxjs-compat@6 --save.
    --Depois import 'rxjs/add/operator/map';

$ ionic g provider testeOrtopedico
$ ionic g page AddTeste
$ ionic g page EditTeste
$ ionic g page anatomia

$ ionic g provider anatomia

$ ionic serve

Para a exportação
$ ionic cordova platform add <platform>
$ ionic cordova build <platform>