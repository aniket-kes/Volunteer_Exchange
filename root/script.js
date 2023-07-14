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
    
/*
    function timer()
    {
        if(i<10)
        {
        currentValue.innerText=i;
        console.log(currentValue.innerText);
        i++;
        const myTimeout=setTimeout(timer, 100);
        }
       
    }
    timer();*/
}
);

};