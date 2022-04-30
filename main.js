function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifer = ml5.imageClassifier('MobileNet', modelLoaded);
}

//hi  this is the js code so yeah

function draw() {
  image(video,0,0, 300, 300)

}

function modelLoaded() {
  console.log('Model has been loaded yay! Amazing. great. amazing');
}

function gotRestult(error,results) {
  if (error) {
    console.log(error);
    console.log("Very sorry there has been an error,:(");
  } else {
    if((results[0].confidence > 0.5) && (previous_result != results[0].label)){
      console.log(results);
      console.log("up above are the results so yeah bye");
      previous_result = result[0].label;
      var synth = window.speechSynthesis;
      speak_data = 'The object that has been detected is the: ' + results[0].label;
      var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);

      document.getElementById("result_object_name").innerHTML = results[0].label;
      document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);

    }
  


  }}
