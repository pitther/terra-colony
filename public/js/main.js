let img;

function preload(){
    img = loadImage('data/worldMap.png');
}

function setup(){
    MANAGER.setMap(img);
    createCanvas(MANAGER.map.width, MANAGER.map.height);
}

function draw(){
    image(MANAGER.map.image, 0, 0, MANAGER.map.width, MANAGER.map.height);

}