import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { TesteOrtopedicoProvider, TesteOrtopedico } from '../../providers/teste-ortopedico/teste-ortopedico';

import { CadastrarTestesPage } from '../cadastrar-testes/cadastrar-testes';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-listar-testes',
  templateUrl: 'listar-testes.html'
})

export class ListarTestesPage {

  testes: any[] = [];
  //   {
  //     "anatomia_nome": "Coluna Cervical",
  //     "nome": "Sinal de Rust",
  //     "descricao": "Um paciente com lesão grave de coluna cervical se apresentará segurando a cabeça com ambas as mãos, como que para suportar o peso da cabeça.",
  //     "ativo": 1
  //   },
  //   {
  //     "anatomia_nome": "Coluna Cervical",
  //     "nome": "Teste de percussão espinhal",
  //     "descricao": "Com o paciente sentado e a cabeça ligeiramente flexionada, realizar a percussão com o martelo de reflexos neurológicos em todo processo espinhoso e a musculatura associada.",
  //     "ativo": 1
  //   },
  //   {
  //     "anatomia_nome": "Coluna Cervical",
  //     "nome": "Teste de Soto-Hall",
  //     "descricao": "Paciente em posição supina, pressionar o estarno com uma mão, enquanto a outra flexiona passivamente o pescoço do paciente até seu tórax.",
  //     "ativo": 0
  //   }
  // ];

  onlyInactive: boolean = false;
  searchText: string = null;

  constructor(public navCtrl: NavController, private toast: ToastController, private testeProvider: TesteOrtopedicoProvider) { }

  ionViewDidEnter(){
    this.obterTestes();
  }

  obterTestes() {
    this.testeProvider.getAll(!this.onlyInactive, this.searchText)
      .then((result: any[]) => {
        this.testes = result;
      })
      .catch((e) => {
        this.toast.create({ message: 'Erro ao buscar testes: ' + e, duration: 3000, position: 'botton' }).present();
      });
  }

  removerTeste(teste: TesteOrtopedico) {
    this.testeProvider.remove(teste.id)
      .then(() => {
        var index = this.testes.indexOf(teste);
        this.testes.splice(index, 1);
        this.toast.create({ message: 'Teste removido.', duration: 3000, position: 'botton' }).present();
      })
      .catch((e) => {
        this.toast.create({ message: 'Erro ao remover teste: ' + e, duration: 3000, position: 'botton' }).present();
      });
  }

  filtrarTeste(ev: any) {
    this.obterTestes();
  }

  backHome() {
    this.navCtrl.push(HomePage);
  }
  
  addTeste() {
    this.navCtrl.push(CadastrarTestesPage);
  }

  editarTeste(id: number) {
    this.navCtrl.push(CadastrarTestesPage, { id: id });
  }
}