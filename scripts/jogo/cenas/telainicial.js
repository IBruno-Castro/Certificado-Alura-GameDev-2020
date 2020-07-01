class TelaInicial {
  constructor() {

  }

  draw() {
    this._imagemDeFundo()
    this._texto()
    this._botao()
    
  }

  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height)
  }
  
  _texto() {
    textFont(fonteTelaInicial)
    textAlign(CENTER)
    textSize(75)
    text('Running Magic', width / 2, height / 4)
    textSize(85) 
    text('Witch Adventures', width / 2, height / 3 + 10)
  }
  
  _botao() {
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw()
  }
}