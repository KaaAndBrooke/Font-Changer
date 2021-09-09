text1="test";
noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
difference=0;
function setup(){
canvas=createCanvas(500, 500);
canvas.center();
video=createCapture(VIDEO);
video.size(300, 300); 
model = ml5.poseNet(video, whenLoaded);
model.on('pose', get_the_heccin_poses);
}
function whenLoaded(){
   console.log("PoseNet was initialized");
}
function get_the_heccin_poses(mistkaes){
    if(mistkaes.length>0){
        console.log('rice ^w^', mistkaes);
        noseX=mistkaes[0].pose.nose.x;
        noseY=mistkaes[0].pose.nose.y;
        leftWristX=mistkaes[0].pose.leftWrist.x;
        rightWristX=mistkaes[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}
function draw(){
    background("#969a97");
    textSize(difference);
    fill("#f5340b");
    text(text1, 50, 400);
}
function change(){
    text1=document.getElementById("input1").value;
}