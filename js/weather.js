const API_KEY = "92ebede86b623b9c0ae1594e0882db0f";

function onGeoOk(position){
    
    /*위도*/
    const lat = position.coords.latitude;
    /*경도*/
    const lng = position.coords.longitude;

    console.log(lat,lng);
    
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    fetch(url)
    .then(response => response.json())
    .then(date =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = date.name;
        weather.innerText = date.weather[0].main;
    });

}

/**위치동의 안했을시 뜨는 에러 */
function onGeoErr(){
    alert("위치동의를 해주세요!")
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoErr);