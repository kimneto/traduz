
export class Coracao{


  //atributos

  constructor(
    public cheio: boolean,
    public urlCoracaoCheio: string = "../../assets/img/coracao_cheio.png",
    public urlCoracaoVazio: string = "../../assets/img/coracao_vazio.png"
  ){



  }


  public exibeCoracao():string {
    if ( this.cheio == true ) {
      return this.urlCoracaoCheio;
    } else {
      return this.urlCoracaoVazio;
    }
  }
}
