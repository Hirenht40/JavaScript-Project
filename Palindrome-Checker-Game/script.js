let btn = document.getElementById("btn");



btn.addEventListener("click", function(){

let str = document.getElementById("input").value;

        let res =  str === str.split('').reverse().join('');
      if(res == true){   document.getElementById("result").innerHTML = "Palindrome 😊";}
      else{
      


 
    document.getElementById("result").innerHTML = "Not Palindrome  🤔 ";
      }

})