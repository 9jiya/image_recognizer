Webcam.attach('#camera');
camera = document.getElementById("camera");
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
function capture(){
    Webcam.snap(function(e){
        document.getElementById("result").innerHTML = '<img id="image1" src="'+e+'"/>';
    });
}
console.log("ml5",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BoEmm5N3J/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model loaded");
}
function identify(){
    d = document.getElementById("image1");
    classifier.classify(d,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}