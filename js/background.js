const morningImgs = ['m1.png', 'm2.jpg'];
const afternoonImgs = ['a1.jpg', 'a2.png'];
const eveninggImgs = ['e1.png', 'e2.jpg'];
const dawnImgs = ['d1.jpg', 'd2.png'];

const chosenM = morningImgs[Math.floor(Math.random() * morningImgs.length)];
const chosenA = afternoonImgs[Math.floor(Math.random() * afternoonImgs.length)];
const chosenE = eveninggImgs[Math.floor(Math.random() * eveninggImgs.length)];
const chosenD = dawnImgs[Math.floor(Math.random() * dawnImgs.length)];

const bgImage = document.createElement("img");

function onTimeImg (src) {
    bgImage.classList.add('background-img');
    bgImage.src = src;
}

function onTimeBg (){
    const date = new Date();
    /**시간만 */
    const hours = String(date.getHours());

    if ( 6 < hours && hours < 12){
        onTimeImg (`img/${chosenM}`);
    }
    else if(12 < hours && hours < 18){
        onTimeImg (`img/${chosenA}`);
    }
    else if(18 < hours && hours < 23 ){
        onTimeImg (`img/${chosenE}`);
    }
    else{
        onTimeImg (`img/${chosenD}`);
    }

}

document.body.appendChild(bgImage);
onTimeBg ();
