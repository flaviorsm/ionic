import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TesteOrtopedicoProvider, testeOrtopedico } from './../../providers/teste-ortopedico/teste-ortopedico';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnatomiaProvider } from '../../providers/anatomia/anatomia';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-teste-edit',
  templateUrl: 'teste-edit.html',
})
export class TesteEditPage {
  title: string;
  form: FormGroup;
  teste: testeOrtopedico;
  anatomias: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private formBuilder: FormBuilder, private provider: TesteOrtopedicoProvider,
              private toast: ToastController, private anatomiaProvider: AnatomiaProvider) {
      
      this.setupPageTitle();
      this.anatomias = this.anatomiaProvider.getAnatomia();
      this.teste = this.navParams.data.contact || { };
      this.createForm();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.contact ? 'Alterando teste' : 'Novo teste';
  }

  createForm() {
    this.form = this.formBuilder.group({
      id: [this.teste.key],
      nome: [this.teste.nome, Validators.required],
      procedimento: [this.teste.procedimento, Validators.required],
      ativo:  [this.teste.ativo],
      anatomia_id:  [this.teste.anatomia_id],
    });
  }

  onSubmit() {
    // if (this.form.valid) {
    //   this.provider.save(this.form.value)
    //     .then(() => {
    //       this.toast.create({ message: 'Teste salvo com sucesso.', duration: 3000 }).present();
    //       this.navCtrl.pop();
    //     })
    //     .catch((e) => {
    //       this.toast.create({ message: 'Erro ao salvar o teste.', duration: 3000 }).present();
    //       console.error(e);
    //     })
    // }
  }

}
