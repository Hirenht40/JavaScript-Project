let input_field = document.getElementById("input");

input_field.addEventListener("input", function(){
    let input = document.getElementById("input").value;
    let len = input.length;
    document.getElementById("wordcount").innerHTML = `character count is: ${len}`;
});



