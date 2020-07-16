class CoracaoExtra {
    constructor(imagem, x, y, largura, altura, velocidade){
      this.imagem = imagem
      this.largura = largura
      this.altura = altura
      this.velocidade = velocidade
      this.y = y
      this.x = x
    }
    
    draw(){
      image(this.imagem, this.x, this.y, this.largura, this.altura)
    }
    
    move(){
      this.x = this.x - this.velocidade
    }
    
    aparece(){
      if(this.x < -width){
        this.x = width
        this.y = parseInt(random(350, 450))
      }
    }
  }