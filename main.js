function setup() {
    canvas=createCanvas(600 , 500);
    canvas.center();

 

     poseNet = ml5.poseNet(modelLoaded)

}

function modelLoaded() {
  console.log('model Loaded')
}