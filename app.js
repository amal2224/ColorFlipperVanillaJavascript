let Orange="#f15025",
    DarkViolet="#4A148C",
    Cyan= "#18FFFF",
    VividGreen="#76FF03";
const colors = ["green", "red", "rgba(133,122,200)","Orange", "DarkViolet" ,"Cyan","VividGreen"];
const btn=document.getElementById('btn');
const color=document.querySelector('.color');

btn.addEventListener('click',function(){
    // get random numbers between 0 - colors.length
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

const getRandomNumber=()=>
Math.floor(Math.random() * colors.length); 