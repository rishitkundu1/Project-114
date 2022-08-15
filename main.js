function preload(){}
function setup(){
      canvas = createCanvas(650, 450);
      canvas.center();
      video = createCapture(VIDEO);
      video.size(650, 450);
      video.hide();

      poseNet = ml5.poseNet(video, modelLoaded);
      poseNet.on('pose', gotPoses);
}
function draw(){}
function saveImage(){
      save('myFilterImage.png')
}
function modelLoaded(){
      console.log('PoseNet is Initialized');
}
function gotPoses(results){
      if(results.length > 0){
            console.log(results);
            console.log('nose x = ' + results[0].pose.nose.x);
            console.log('nose y = ' + results[0].pose.nose.y);
      }
}