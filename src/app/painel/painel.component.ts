import {TentativasComponent} from './../tentativas/tentativas.component';
import {ProgressoComponent} from './../progresso/progresso.component';
import {async} from '@angular/core/testing';
import {FRASES} from './frases-mock';
import {FraseModel} from './../shared/frase.model';
import {Component, OnInit, Input} from '@angular/core';
import {ConvertActionBindingResult} from '@angular/compiler/src/compiler_util/expression_converter';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frasex: FraseModel[] = FRASES;
  public progresso = 0;
  public resposta = '';
  public rodada = 0;
  public rodadaFrase: FraseModel;
  public tentativas = 3;


  constructor() {

    this.rodadaFrase = this.frasex[this.rodada];

  }

  ngOnInit() {
  }


  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement> resposta.target).value;
  }


  public verificaResposta(): void {

    if (this.rodadaFrase.fraseBr === this.resposta) {

      this.progresso = this.progresso + 25;
      this.rodada++;
      this.rodadaFrase = this.frasex[this.rodada];
     if (this.rodada === 4) {
       this.progresso = this.progresso + 25;
        alert('GANHOU');
      }

      this.resposta = '';


    } else {
      this.tentativas--;


    }

    console.log('Verifica a resposta: ' + this.resposta);
        this.resposta = '';
    if (this.tentativas === -1) {


      alert('PERDEU');


    }


  }
}
