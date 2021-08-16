var video = " ";
var classifier = " ";

function preload(){

}



function setup(){
    var canvas = createCanvas(300, 200);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 200);
    video.hide();

    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/k6gt-_S65/model.json", modelLoaded);
}

function draw(){
     image(video, 0, 0, 300, 200);
     classifier.classify(video, gotResult);
}

function modelLoaded(){
     console.log("Model is loaded");
}

function gotResult(error, results) {
     if(error){
          console.error("There has been an error properties", error);
     }else{
          console.log(results);
          
          document.getElementById("obj_name").innerHTML = results[0].label;
          document.getElementById("obj_acc").innerHTML = results[0].confidence.toFixed(3)*100;
     }
}