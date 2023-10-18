document.onmousemove = eyeball


const eye = document.querySelectorAll('.eye');


function eyeball(){
    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().left) + (eye.clientHeight / 2);

        let radian = Math.atan2(event.pageX - x , event.pageY - y);
        let rotation = (radian * (180 / Math.PI * - 1) ) + 270;//270
        eye.style.transform = 'rotate('+rotation+'deg)'
    });
}


for (let i = 0; i < eye.length; i++) {
document.onclick = () => {
    let bef = document.querySelector('.bef');
    let bef2 = document.querySelector('.bef-2');
    bef.classList.add('glik');
    bef2.classList.add('glik');
    setTimeout(() => {
        bef2.classList.remove('glik');
        bef.classList.remove('glik');
    }, 1000);
}
   
}