var balloon,balloonImage1,balloonImage2;
// crie as variáveis da base de dados e da posição aqui


function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
}

function setup() {
  //crie o ambiente incial utilizando a função firebase.database()
  
  createCanvas(windowWidth,windowHeight);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 

  //obtenha as informações da base de dados com .ref('caminho')
  
  //crie o ouvinte com .on("value", funçãodesucesso, funçãodeerro)
  
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //escreva um código para mover o balão para a esquerda, escrevendo na base de dados
    
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //escreva um código para mover o balão para a direita, escrevendo na base de dados
    
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //escreva um código para mover o balão para cima, escrevendo na base de dados
    
    //aumente o tamanho do balão
    
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //escreva um código para mover o balão para baixo, escrevendo na base de dados
    
    //diminua o tamanho do balão
    
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

//não se esqueça de definir a função de sucesso do .on(), incluindo .val();
//não se esqueça de definir a função de erro do .on();
//não se esqueça de definir a função de escrever a posição do balão no banco de dados, incluindo .set()

