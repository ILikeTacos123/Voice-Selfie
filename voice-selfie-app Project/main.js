var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    speak();
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapeshot();
        save();
    },5000);
}

Webcam.set ({
    width: 360,
    height: 250,
    imageformat : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");

function take_snapeshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="my_selfie" src="'+data_uri+'"/>';
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("my_selfie").src;
    link.href = image;
    link.click();
}