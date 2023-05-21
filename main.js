/** Check value weight, height oninput => Alert if error
 * When user click Calculate btn:
 * Get value weight, height
 * Cal BMI
 * Check BMI with condition => give result with img change
 */

var height = document.getElementById('height'),
weight = document.getElementById('weight');


// Check value weight, height oninput
function checkInput() {
    var heightError = document.getElementById('heightError');
    var weightError = document.getElementById('weightError');

    // set default value for error
    heightError.innerHTML = weightError.innerHTML = ""
    height.style.borderColor = weight.style.borderColor = '#9d33f3'

    // Check value weight, height oninput => Alert if error
    if (isNaN(Number(height.value))) {
        heightError.innerHTML = "Please input number";
        height.style.borderColor = 'red';
    }
    if (isNaN(Number(weight.value))) {
        weightError.innerHTML = "Please input number";
        weight.style.borderColor = 'red';
    }   
}

height.oninput = weight.oninput = checkInput;

// When click button
var calBtn = document.querySelector('.btn-boost');


calBtn.onclick = checkBMI;

function checkBMI() {

    var bmi = (weight.value * 10000 / (height.value * height.value)).toFixed(2) ;
    var outputText = document.getElementById('output');
    var outputImg = document.getElementById('outputIMG');

    // Check BMI with condition => give result with img change
    if (bmi < 18.5 && bmi > 0) {
        outputText.innerHTML = "Under weight: " + bmi;
        outputImg.src = "./img/body-1.png";
    } else if (bmi < 24) {
        outputText.innerHTML = "Normal: " + bmi;
        outputImg.src = "./img/body-2.png";
    } else if (bmi < 30) {
        outputText.innerHTML = "Over weight: " + bmi;
        outputImg.src = "./img/body-3.png";
    } else if (bmi < 35) {
        outputText.innerHTML = "Severe obesity: " + bmi;
        outputImg.src = "./img/body-4.png";
    } else if (bmi < 40) {
        outputText.innerHTML = "Morbid obesity : " + bmi;
        outputImg.src = "./img/body-5.png";
    } else {
        outputText.innerHTML = "Super obesity : " + bmi;
        outputImg.src = "./img/body-6.png";
    }

    console.log(outputText)
}