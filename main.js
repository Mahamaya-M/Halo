rightEyeX=0
rightEyeY=0
function preload(){
clown= loadImage("https://i.postimg.cc/Vk9FJCcX/halo-img.png");
}
function setup(){
canvas=createCanvas(300,300)
canvas.center()
video= createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized")

}

function gotPoses(results){
if (results.length>0){
    console.log(results);
    rightEyeX=results[0].pose.rightEye.x-210
    rightEyeY=results[0].pose.rightEye.y-200
    console.log(results[0].pose.rightEye.x)
    console.log(results[0].pose.rightEye.y)
}
}

function draw(){
image(video,0,0,300,300);
image(clown, rightEyeX,rightEyeY, 130, 70);

}
function takeSnap(){
    save('selfie.png')
}