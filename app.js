const adviceid = document.getElementById("advice-id");
const advicecont = document.getElementById("advice-cont");
const generate = document.getElementById("generate");

function showRandomAdvice(event){
  if(event) event.preventDefault();
  fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`)
    .then((response) => response.json())
    .then((data) => {
      adviceid.innerText = data.slip.id;
      advicecont.innerText = data.slip.advice;
    });
}
showRandomAdvice();
generate.addEventListener('click', showRandomAdvice);
