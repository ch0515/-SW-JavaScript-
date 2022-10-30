/*지시사항을 따라 작성해주세요*/
var target = document.getElementById("btn");

function changeButtonOnclick() {
  target.classList.add("changeColor");
  
  /*지시사항 2번*/
  target.innerText = "버튼 클릭 성공!";
  
}

/*지시사항 3번*/
target.addEventListener("click", changeButtonOnclick);

