
//CREATING THE PAGE
const Emojis=["😁","🤪","💩","😈","💪","🏊","🚴","🙈","🌍","🌈","🍆","✈","🏡","🌅","⌚","📱","💻","📷","😁","🤪","💩","😈","💪","🏊","🚴","🙈","🌍","🌈","🍆","✈","🏡","🌅","⌚","📱","💻","📷"]
const numbers=shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35])

function createDiv(i){
    const div=document.createElement("div");
    div.class="outer"
    div.innerHTML=`<div onlcik='clickFunction' class='inner'>${Emojis[i]}</div>`;

    document.getElementById("main").appendChild(div);
}

function repeat(func,times){
    for(i=0;i<times;i++){
        func(numbers[i])
    }
}
repeat(createDiv,36)

 function shuffle(array) {
  var m = array.length, t, i;
  while (m>0) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

//SETTING THE RULES AND FUNCTIOPNS
function clickFunction(e){
    console.log(e.target);
    e.target.children[0].style.visibility="visible";
}
document.getElementById("main").addEventListener("click",clickFunction)