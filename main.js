img = "";
status1 = "";
objectDetector1 = "";
objects = [];

function preload(){
   img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector1 = ml5.objectDetector('cocossd', model_loaded);
document.getElementById("status").innerHTML = "Status: Detecting";
}

function model_loaded(){
console.log("Model Loaded!");
status1 = true;
objectDetector1.detect(img, gotResults);
}


function draw(){
    image(img, 0, 0, 640, 420);
    if(status1 != ""){
        for(i=0; i<objects.length; i++){
document.getElementById("status").innerHTML = "Status: Object Detected";
fill("#FF0000");
percent = floor(objects[i].confidence * 100);
text(objects[i].label + " " + percent + "%", objects[i].x + 10, objects[i].y + 10);
noFill();
stroke("#FF0000");
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }
  
   
}

function gotResults(error, results){
if(error){
    console.error(error);
} else{
console.log(results);
objects = results;

}

}

