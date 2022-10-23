
/**HTML 로그인 폼 */
const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
/**로그인 했을시 나오는 이름과 문구*/
const greeting = document.querySelector("#greeting");

/**클래스네임 : 히든(숨겨줌) */
const HIDDEN_CLASSNAME = "hidden";
/**유저가 로그인 할때 입력한 이름 */
const USERNAME_KEY = "username";

/**이름 쓰고 로그인 했을때 로컬스테이지에 저정되는 정보 */
function loginClick(event){
  event.preventDefault();
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  
  loginForm.classList.add(HIDDEN_CLASSNAME);

  showGreeting(username);
}

/**유저가 로그인 했을때 보는 문구 */
function showGreeting(username){  
  greeting.classList.remove(HIDDEN_CLASSNAME);
  const date = new Date();
  /**시간만 */
  const hours = String(date.getHours());

  if ( 6 < hours && hours < 12){
    greeting.innerText = `Good Morning  ${username}`;
  }
  else if(12 < hours && hours < 18){
    greeting.innerText = `Good Afternooon ${username}`;
  }
  else if(18 < hours && hours < 23 ){
     greeting.innerText = `Good Evening ${username}`;
    }
  else{
    greeting.innerText = `Good Night ${username}`;
  }
}

loginForm.addEventListener("submit", loginClick);

/**로컬스테이지에 저장된 이름 */
const savedName = localStorage.getItem(USERNAME_KEY);



if(savedName === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginClick);
} else {
  showGreeting(savedName);
}; 