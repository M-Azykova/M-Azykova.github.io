let pic1 = document.getElementById("pic1");

let pic2 = document.getElementById("pic2");
pic1.style.display="block";
setInterval(function(){
pic1.style.display="none";
}
,4000);

/*pic2.style.display="block";
setInterval(function(){
pic2.style.display="none";

}
,4000);*/
let main = document.getElementById("main");
setInterval(function(){
main.style.display="block" ;
}
,5500);

let optionsIterator;
let container=document.getElementById("container");
let options=[];
let question=document.getElementById("question");
let send_message= document.getElementById("send_message");
let score= document.getElementById("score");
let username= document.getElementById("user");
let questionCounter=0;
let correct=0;
score.value="";
function loadQuestion() {
question.innerHTML=Questions[questionCounter].text;
for (optionsIterator=0;optionsIterator < 4;optionsIterator ++) {
options[optionsIterator].innerHTML=Questions[questionCounter].options[optionsIterator];
}
}

function proceedAnswer(event) {


let index = event.target.index;
if(Questions[questionCounter].correct==index){
correct++;}
questionCounter++;
if (questionCounter==Questions.length)
{container.innerHTML="<h1>Правильных ответов" + correct +" / " + Questions.length + "</h1>";
console.log(correct);
}
else{
loadQuestion();
}

}
for(optionsIterator=0; optionsIterator < 4; optionsIterator++){
let option = document.createElement("div");
option.classList.add("panel", "panel--option");
option.index = optionsIterator;
option.addEventListener("click", proceedAnswer);
container.appendChild(option);
options.push(option);
}
loadQuestion();
