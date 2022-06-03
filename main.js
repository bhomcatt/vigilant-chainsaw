var background, background_img;

function preload(){
background_img = loadImage("imgs/battle test.png");
}

function setup(){

}

function draw(){
    createCanvas(displayWidth, displayHeight);
    background(background_img);
}