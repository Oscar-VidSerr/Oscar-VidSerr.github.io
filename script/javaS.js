var slideIndex = 0;

function showCarro() {
  var i;
  var slides = document.getElementsByClassName("Carrousel");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showCarro, 2000);
};


function changeCFGS() {
  if (document.getElementById("CFGM").style.display == "block" || document.getElementById("OTHER").style.display == "block") {
    document.getElementById("CFGM").style.display = "none";
    document.getElementById("OTHER").style.display = "none";
    document.getElementById("CFGS").style.display = "block";
  }
};

function changeCFGM() {
  if (document.getElementById("CFGS").style.display == "block" || document.getElementById("OTHER").style.display == "block") {
    document.getElementById("CFGS").style.display = "none";
    document.getElementById("OTHER").style.display = "none";
    document.getElementById("CFGM").style.display = "block";
  }
};

function changeOTHER() {
  if (document.getElementById("CFGS").style.display == "block" || document.getElementById("CFGM").style.display == "block") {
    document.getElementById("CFGS").style.display = "none";
    document.getElementById("CFGM").style.display = "none";
    document.getElementById("OTHER").style.display = "block";
  }
};

function openmodal() {
  document.getElementById('modal').style.display = 'block';
}

function closemodal() {
  document.getElementById('modal').style.display = 'none';
}
