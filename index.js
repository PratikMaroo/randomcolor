const randomcolor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0 ; i < 6;i++){
        color += hex[Math.floor(Math.random() * 16)];     
    }
  //  document.getElementById('#text').innerHTML = color;
    return color;
};
let interval;
const startchangecolor = function(){
    if(!interval){
        interval = setInterval(  function changecolor(){
            document.body.style.backgroundColor = randomcolor();
            document.getElementById('text').innerHTML = "Background Color: " + randomcolor();
        },2000)
    }
}
const stopchangecolor = function () {
    clearInterval(interval);
    interval = null;
  };

document.querySelector('#start').addEventListener("click" , startchangecolor);
document.querySelector('#stop').addEventListener("click" , stopchangecolor);