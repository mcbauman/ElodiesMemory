const Emojis=["😁","🤪","💩","😈","💪","🏊","🚴","🙈","🌍","🌈","🍆","✈","🏡","🌅","⌚","📱","💻","📷","😁","🤪","💩","😈","💪","🏊","🚴","🙈","🌍","🌈","🍆","✈","🏡","🌅","⌚","📱","💻","📷"]
const numbers=shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35])
console.log(numbers);

// CONSOLE LOG----
// console.log("Starting Emojis lenght",Emojis.length);

// function randomNumberF(){
//     let randomNumber=Math.floor((Math.random()*19)+1)
    
//     if(numbers.includes(randomNumber)){
//         numbers.splice(randomNumber,1)
//         return randomNumber
//     }
//     else{
//         console.log("YYY---ExtraCall---YYY");
//         randomNumberF();
//     }
// }

function createDiv(i){
    const div=document.createElement("div");
    div.className="outer"
    div.innerHTML=`<div className='inner'>${Emojis[i]}</div>`;

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