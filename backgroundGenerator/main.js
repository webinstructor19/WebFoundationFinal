const body = document.querySelector('#gradient-background'),
      color1 = document.querySelector('.color1'),
      color2 = document.querySelector('.color2');

// function to change background
// background: linear-gradient(to right , color1.value , color2.value);

function setGradientBackground(){
    body.style.background = `linear-gradient(to right , ${color1.value} 
        ,${color2.value})`;
}

color1.addEventListener('input' , setGradientBackground);
color2.addEventListener('input' , setGradientBackground);