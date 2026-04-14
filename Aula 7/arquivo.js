let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d')

var retangulo1 = {
    x: 30,
    y: 20,
    altura: 10,
    largura: 60,
    cor: "red",
    desenha() {
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura)
    }
}


var retangulo2 = {
    x: 200,
    y: 200,
    largura: 60,
    altura: 50,
    cor: "blue",
    desenha() {
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.largura,this.altura)
    }
}

var direc = 1 

function animacao(){
    ctx.clearRect(0,0,400,400)
    if (retangulo1.x == 355){
        direc = -1
    }
    if (retangulo1.x == 0){
        direc = 1
    }


    retangulo1.x = retangulo1.x + direc;
    retangulo1.desenha();
    retangulo2. desenha();
    requestAnimationFrame(animacao)
}
animacao();

function animacao(){
    ctx.clearRect(0,0,400,400)
    retangulo1.desenha();
    requestAnimationFrame(animacao)
}
animacao();
document.addEventListener('keydown',function(evento){
    tecla = evento.key;
    console.log(tecla);
    if(tecla == 'ArrowUp')   {retangulo1.y = retangulo1.y-1}  
    if(tecla == 'ArrowDown') {retangulo1.y = retangulo1.y+1}  
    if(tecla == 'ArrowLeft') {retangulo1.x = retangulo1.x-1}  
    if(tecla == 'ArrowRight'){retangulo1.x = retangulo1.x+1}  
})

