var img = document.getElementById('img');

var slides = ['img1.jpg', 'img2.jpg','img3.jpg','img4.jpg'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img style='z-index:-1;' src=assets/"+slides[Start-1]+">";
   
}
setInterval(slider,2000);