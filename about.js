const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const dp = document.querySelector('.dp')

open.addEventListener('click',()=>{
    container.classList.add('show-nav')
});

close.addEventListener('click',()=>{
    container.classList.remove('show-nav')
});

let load = 0

let interval = setInterval(()=>{
    load++ 

    if(load > 50) {
        clearInterval(interval)
    }

    console.log(load);
    dp.style.filter = `blur(${scale(load,0,50,30,0)}px)`

}, 30)

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

