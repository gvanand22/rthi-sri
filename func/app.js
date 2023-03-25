// function hearts(){

//     const container = document.getElementById('container');
//     const make = document.createElement('div');
//     make.classList.add('pop_heart');
//     make.innerHTML="💙";
//     container.appendChild(make)
//     console.log(make);
// }
// hearts();

    function hearts(){
        const container = document.querySelector('.container');
        const make = document.createElement('div');
        make.classList.add('pop_heart');
        make.innerHTML="💙";
        make.style.left=Math.random()*100+'vw';
        make.style.animationDuration = Math.random()* 2+6+'s'
        container.appendChild(make)
        setTimeout(()=>{make.remove();},3260);
        // console.log(make);
        }
    setInterval(hearts,480);