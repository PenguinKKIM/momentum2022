
/**하단부 시계 */
const clock = document.querySelector("#clock");


/**시계실행 */
function init (){
    getClock()
    setInterval(getClock, 1000);
}

/**시간얻는 함수 */
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${hours} : ${minutes} : ${seconds}`;
};

init();

