const btn = document.querySelector("button");

// alert("Hello, world!");

function sendAlert() {
    alert("Text has changed.");
  }

function bigger() {
    document.getElementById("userInput").style.fontSize = "24px";
  }

// Function to apply "FancyShmancy" styling
function applyFancyStyle() {
    sendAlert();
    document.getElementById("userInput").style.fontWeight = "bold";
    document.getElementById("userInput").style.color = "blue";
    document.getElementById("userInput").style.textDecoration = "underline";
}

// Function to remove "FancyShmancy" styling
function removeFancyStyle() {
    sendAlert();
    document.getElementById("userInput").style.fontWeight = "normal";
    document.getElementById("userInput").style.color = "black";
    document.getElementById("userInput").style.textDecoration = "none";
}

// Function to convert text to "Moo" style
function moo() {
    var textArea = document.getElementById("userInput");
    var text = textArea.value.toUpperCase(); 

    var sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].trim() + "-Moo";
    }
    text = sentences.join(". ");

    textArea.value = text; 
}