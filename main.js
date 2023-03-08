leftwristx=0;
rightwristx=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,550);
    canvas.position(700,110);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}
function draw(){
    background("pink");
    fill("black");
    stroke("black");
    textSize(difference);
    text("sonja",25,500);
    document.getElementById("square_sides").innerHTML="the font size of the text is ="+difference;
}
function modelloaded(){
    console.log("model has been initailized");
}
function gotposes(results){
    if(results.length>0)
    {
        console.log(results);
leftwristx=results[0].pose.leftWrist.x;
rightwrist=results[0].pose.rightWrist.x;
difference=floor(leftwristx-rightwristx);
    }
}
