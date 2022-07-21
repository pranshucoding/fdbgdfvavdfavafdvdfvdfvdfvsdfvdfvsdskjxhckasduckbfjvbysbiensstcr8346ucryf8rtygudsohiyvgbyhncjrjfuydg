Webcam.set({
width:350,
height:350,
img_format:'png',
png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function capture_img(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_img" src="'+data_uri+'"/>';});
    }
console.log("ml5 version:",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JRVmarTN9/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!");
}
function identify_img(){
    img = document.getElementById("capture_img");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
