let button = document.getElementById("btn");



button.addEventListener("click", countDown);

let key = 1;
let input;



function countDown(){
    if(key === 1){
    let input_time = document.getElementById("inputTime").value;
        input = input_time;
    
        key = 0;
    }
 

    
    document.getElementById("count").innerHTML = input;

    if(input>0){
        setTimeout(countDown, 1000);
    }
    else{
        key = 1;
        document.getElementById("count").innerHTML = 0;

    }
    color_chnager()
    input = input - 1;
}


function color_chnager(){
    // Generate a random color in the format "rgb(r, g, b)"
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    // Change the background color of the element
    document.getElementById("count").style.color = randomColor;
  };


  


