let button = document.getElementById("btn");



button.addEventListener("click", countDown);

let key = 1;
let input = 0;



function countDown(){
    if(key === 1){
    let input_time = document.getElementById("inputTime").value;
        input = input_time;
        key = 0;
    }

    input = input - 1;
    console.log(input);
    document.getElementById("count").innerHTML = input;

    if(input>0){
        setTimeout(countDown, 1000);
    }
    else{
        key = 1;
    }
}





