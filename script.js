const num= document.getElementById("getNum");
const result=document.getElementById("answer");
function randomNum(){
  let ranNum= Math.floor(Math.random()*100)
  if(num > ranNum) {
    result.innerHTML= "Your Guess is quite high, try again";
  }
  else if (num === ranNum){
   result.innerHTML= "Perfect guess, you are right";
  }
  else {
    result.innerHTML= "Your Guess is quite low, try again";
};
  };
