song ="";
music = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";
score_leftWrist="0";
statusOfTheSong = "";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function preload(){
    song = loadSound("song.mp3");
    music = loadSound("music.mp3");
}

function draw(){
    image(video,0,0,600,530);

    fill("red");
    stroke("pink");

    if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX, leftWristY, 20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume; song.setVolume (volume);
    song.setVolume(volume);
    }
    }


function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);

        score_leftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWrist_x+" leftWristY = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWrist_x+" rightWristY = "+rightWrist_y);
    }
}

function stop()
{
    if(song.isPlaying())
    {
        song.stop()
    }
    if(music.isPlaying())
    {
        music.stop()
    }
}