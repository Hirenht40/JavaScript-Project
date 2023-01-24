
function generateRandomNumber() {
    return Math.floor(Math.random() * 1643) + 1;
  }
  
  function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  



  let btn = document.getElementById("new-quote-button");

  btn.addEventListener("click", function(){

    let number = generateRandomNumber()

    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let randomColor = generateRandomColor()
    document.getElementById("quote").style.color =randomColor ;
    document.getElementById("author").style.color =randomColor ;


    document.getElementById("quote").innerHTML = `"${data[number].text}"`;
    document.getElementById("author").innerHTML = `~ ${data[number].author}`;
    console.log(data);
  });





  });