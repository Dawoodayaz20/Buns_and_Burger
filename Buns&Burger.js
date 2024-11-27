//slide show pictures function
let slideindex = 0 
showSlides()
function showSlides() {
    let i ;
    let slides = document.getElementsByClassName('slideshow_pics');
    for (i=0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    slideindex++;
    if(slideindex > slides.length){
        slideindex = 1;
    }
    slides[slideindex - 1].style.display = 'block';
    setTimeout(showSlides, 3000) //This will call the function after every 3sec
}

