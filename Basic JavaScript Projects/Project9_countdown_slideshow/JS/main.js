//countdown timer function
function countdown() {
    var seconds = document.getElementById("seconds").value;
   //gets the input from the user
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        
        if (seconds < 0) {
            setTimeout(tick, 1000);
        } else {
            alert("Time's up!");
        }
    }
    tick();
}

//Image slideshow functions
let Slideindex = 1;
showSlides(Slideindex);

//Next/previous controls for slideshow
function plusSlides(n) {
    showslides(Slideindex += n);
}

//Thumbnail image controls for slideshow
function currentSlide(n) {
    showSlides(Slideindex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {Slideindex = 1}    
    if (n < 1) {Slideindex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[Slideindex-1].style.display = "block";  
    dots[Slideindex-1].className += " active";
}
