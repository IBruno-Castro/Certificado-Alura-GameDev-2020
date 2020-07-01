class BotaoGerenciador {
  constructor(texto, x, y){
    this.texto = texto
    this.x = x
    this.y = y
    this.botao = createButton(this.texto)
    this.botao.mousePressed( () => {this._alteracena()})
    this.botao.addClass('botao-tela-inicial')
  }
  
  draw(){
    this.botao.position(this.x, this.y)
    this.botao.center('horizontal')
    
  }
  
  _alteracena(){
    this.botao.remove();
    cenaAtual = 'jogo';
  }  
}