class Vida {
  constructor(total, inicial){
    this.total = total
    this.inicial = inicial
    this.vidas = this.inicial
    
    this.largura = 25
    this.altura = 25
    this.xinicial = 25
    this.yinicial = 25
  }
  
  draw(){
    for(let i = 0; i < this.vidas; i++){
      const margem = i * 10
      const posicao = this.xinicial * (i + 1)
      image(imagemHeart, posicao + margem, this.yinicial, this.largura, this.altura)
    }
  }
  
  ganhaVida(){
    if(this.vidas <= this.total){
      this.vidas++
    }
  }  
  
  perdeVida(){
    this.vidas--
  }
}