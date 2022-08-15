noseX = 0;
noseY = 0;
function preload(){
      mustacheImage = loadImage('m.png');
}
function setup(){
      canvas = createCanvas(650, 450);
      canvas.center();
      video = createCapture(VIDEO);
      video.size(650, 450);
      video.hide();

      poseNet = ml5.poseNet(video, modelLoaded);
      poseNet.on('pose', gotPoses);
}
function draw(){
      image(video, 0, 0, 650, 450);
      image(mustacheImage, noseX, noseY, 100, 60);
}
function saveImage(){
      save('myFilterImage.png')
}
function modelLoaded(){
      console.log('PoseNet is Initialized');
}
function gotPoses(results){
      if(results.length > 0){
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log('nose x = ' + noseX);
            console.log('nose y = ' + noseY);
      }
}