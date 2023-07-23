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
setInterval(slider,5000);

//animate numbers
run();
function run(){
const speed=200;

const counterNum=document.getElementsByClassName("num");

Array.prototype.forEach.call(counterNum,function (currentValue) {
    const targetNum= parseInt(currentValue.innerText);
   
    var initialNum=0;
    const incrementNum=(targetNum/speed);
  
   function count(){
   if(initialNum < targetNum)
    {
        currentValue.innerText = parseInt(parseInt(initialNum) + parseInt(incrementNum));
        initialNum=currentValue.innerText;
       
    }
    const myTimeout= setTimeout(count, 20);

    }
    count();
    
}
);

};

//Hamburger Menu part
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

//scroll to reveal element
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);