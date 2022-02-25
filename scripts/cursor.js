// list of what I want to say
var i = 0;
var txt = 'Hello world! Welcome to my site.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

varInterval = setInterval(typeWriter, 1000);
