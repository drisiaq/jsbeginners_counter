const number = document.querySelector('.number');
const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');

let numberValue = 7;

add.addEventListener('click', function(){
  numberValue += 1;
  number.textContent = numberValue;
  if (numberValue > 50){
    subtract.classList.subtract('hidden');
  } else{
    subtract.classList.remove('hidden');
  }
});

subtract.addEventListener('click', function(){
  numberValue -= 1;
  number.textContent = numberValue;
  if (numberValue<1){
    subtract.classList.add('hidden');
  } else {
    subtract.classList.remove('hidden');
  }
});
// function addNumber(){
//   if (num < 50){
//     num ++;
//     return num;
//   }
//   else {
//     console.log('This is the highest number');
//   }
//   // document.getElementById("demo").innerHTML = num;
// }

// addNumber()

// function lowerNumber(){
//   if (num > 50){
//     num --;
//     return num;
//   }
//   else {
//     console.log('This is the lowest number');
//   }
//   // document.getElementById("demo").innerHTML = num;
// }

// lowerNumber()