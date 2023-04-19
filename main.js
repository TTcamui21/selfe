
/*O reconhecimento de fala permite que um aplicativo ou site da web reconheça a fala 
do usuário e a transforme em texto. Isso é feito usando um objeto SpeechRecognition*/
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox"); 

function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);
      if(Content =="tire minha selfie")
      {
        console.log("tirando selfie --- ");
        speak();
      }
}


function speak(){
    /*A síntese de fala permite que um aplicativo ou site da web gere voz a
     partir do texto. Isso é feito usando um objeto SpeechSynthesis*/

    var synth = window.speechSynthesis;

    //Utilize o código ' speak_data' para fazer a voz da api falar
    speak_data = "Tirando sua selfie em 5 segundos";

    /*SpeechSynthesisUtterance, que contém o texto que deve ser falado e as configurações de voz a serem usadas.*/
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis); 

    Webcam.attach(camera);

    //Utilize o código setTimeout, pois ele define o tempo em que determinada coisa irá acontecer
    setTimeout(function()
    { 
        take_selfie(); 
        save();
        //Coloque 5000, pois ele significa 5 segundos
    }, 5000);
}


camera = document.getElementById("camera");

//Defina as propriedades da câmera com a professora
//???
Webcam.set({

width:360,
heigth:250,
image_format : "jpeg",
 jpeg_quality:90,
 }) ;     

function take_selfie()
{
    Webcam.snap(data_uri);
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}
