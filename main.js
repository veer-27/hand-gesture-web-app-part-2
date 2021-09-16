prediction1 = "";
prediction2 = "";

Webcam.set({
 Width: 350,
 Height: 300,
 Image_format: 'png',
 png_quality:1000 
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takesnapshot() 
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="captured_image" src ="'+ data_uri +'"/>';
    })
}

console.log('ml5.version: ',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Y_pCiZp2Ls/model.json',modelLoaded);

function modelLoaded()
{
    console.log('modelLoaded');
}

function speak() 
{
    var synth = window.speechSynthesis;
    speak1 = "The First Prediction Is " + prediction1;
    speak2 = "The second Prediction Is " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak1 + speak2);
    synth.speak(utterThis);

}







