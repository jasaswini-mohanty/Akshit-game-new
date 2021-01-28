
var gamestate="play";

function preload(){
    night=loadImage("night.jpeg");
    
    coprun=loadAnimation("coprun/coprun1.png","coprun/coprun2.png","coprun/coprun3.png","coprun/coprun4.png",
             "coprun/coprun5.png","coprun/coprun6.png")
    //coprun=loadImage("coprun/coprun6.png")

    zombie1=loadImage("zom3.png");
    zombie2=loadImage("zom4.png");

    treeimg1=loadImage("images/tree1.png")
    treeimg2=loadImage("images/tree2.png")
}


function setup(){
    createCanvas(1200,800);

    scene= createSprite(600,400,50,50);
    scene.velocityX=-5;
    scene.addImage(night);
    scene.scale=3;

    ground= createSprite(600,780,2500,20);
    ground.velocityX=-5;

    cop= createSprite(200,660,10,10);
    cop.addAnimation("run",coprun);
    cop.scale=0.5;
    cop.collide(ground);
    //cop.debug=true;
    cop.setCollider("rectangle",0,0,cop.width/10,cop.height/10);
    //cop.addImage(coprun);

    zombiegroup= new Group();

    treegroup= new Group();

}


function draw(){
    

    if(gamestate=="wait"){
        background("lightgreen");

        fill("blue");
        textSize(30)
        text("ZOMBIE HUNTING", displayWidth/2-150,30);

        fill("black");
        textSize(20);
        text("Game Rules", displayWidth/4,200);

        textSize(15);
        
        text("1. Press space to start the game",displayWidth/4,280)
        text("2. Press S to shoot the zombies",displayWidth/4,330)
        text("3. Press K to use the knife",displayWidth/4,380)


        if(keyDown("space")){
            gamestate="play"
        }
    }

    if(gamestate=="play"){
        background("black");

        if(scene.x<0){
            scene.x=scene.width/2;
        }

        if(ground.x<0){
            ground.x=ground.width/2;
        }
        drawSprites();

        spawnzombies();
        spawntrees();
    }


}

function spawnzombies(){
    if(frameCount % 150==0){
        var zombie= createSprite(1200,670,10,10);
        zombie.addImage(zombie1);
        zombie.velocityX=-8;
        zombie.scale=0.7;
        zombiegroup.add(zombie);
    }
}

function spawntrees(){
    if(frameCount % 100==0){
        var tree= createSprite(random(200,900),random(100,500),10,10);
        
        tree.velocityX=-8;
        tree.scale=0.7;
        treegroup.add(tree);

        var num= Math.round(random(1,2));

        switch(num){
            case 1: tree.addImage(treeimg1);
            break;
            case 2: tree.addImage(treeimg2);
            break;
            default: break;
        }
    }
}