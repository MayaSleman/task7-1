let btn =document.getElementById("btn");
btn.addEventListener('click' ,() => {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let number3 = document.getElementById("number3").value;
    let maxElement = Math.max(number1, number2, number3);
    let minElement = Math.min(number1, number2, number3);
    
    console.log("max element = " + maxElement);
    console.log("min element = " + minElement);
}
)
let btn1 = document.getElementById("btn1");
btn1.addEventListener('click' ,() => {
    let text =document.getElementById("text").value;
    if(text.length==1){
        if (text == 'a' || text == 'A' || text == 'e' || text == 'E' || text == 'i' || text == 'I' || text == 'o' || text == 'O' || text == 'u' || text == 'U') {
            console.log("vowel");
            } else if ((text >= 'a' && text <= 'z') || (text >= 'A' && text <= 'Z')) {
              console.log("consonant");
            } else {
                console.log("Invalid please enter an alphabet");
             }
    }
    else{
        console.log("please enter one character");
    }
  
}
)
let btn2 = document.getElementById("btn2");
btn2.addEventListener('click' ,() => {
    let num =document.getElementById("num").value;
    let result = ""
    for(let i = 1; i <= 12; i++) {
        result = result+" "+num *i;
    }
    console.log(result);
}
)
let btn3 = document.getElementById("btn3");
btn3.addEventListener('click' ,() => {
    let number =document.getElementById("number").value;
    let result1="";
    for(let j = 1; j <= number ; j++) {
        if(j%2 == 0){
            result1 = result1 +" "+ j;
        }
    }
    console.log(result1);
}
)
let btn4 = document.getElementById("btn4");
btn4.addEventListener('click' ,() => {
    let mark1 = document.getElementById("mark1").value;
    let mark2 = document.getElementById("mark2").value;
    let mark3 = document.getElementById("mark3").value;
    let mark4 = document.getElementById("mark4").value;
    let mark5 = document.getElementById("mark5").value;
    if (mark1 == ""|| mark2 == "" || mark3 == "" || mark4 == "" || mark5 == "") { 
        console.log("Please enter a mark");
    }
    else{
    let total =parseInt( mark1)+ parseInt( mark2) +parseInt( mark3)+ parseInt( mark4) + parseInt( mark5) ;
    console.log("Total marks =" + total);
    let average = total / 5;
    console.log("Average Marks =" + average);
    let percentage = (total / 500) * 100;
    console.log("Percentage=" + percentage +" %");
 }
}
)
let btn5 = document.getElementById("btn5");
btn5.addEventListener('click' ,() => {
    let physics = document.getElementById("physics").value;
    let chemistry = document.getElementById("chemistry").value;
    let biology = document.getElementById("biology").value;
    let math = document.getElementById("math").value;
    let computer = document.getElementById("computer").value;
    if (physics == ""|| chemistry == "" || biology == "" || math == "" || computer == "") { 
        console.log("Please enter a mark");
    }
    else{
        let total = parseInt(physics) + parseInt(chemistry) + parseInt(biology) + parseInt(math) + parseInt(computer) ;
        let percentage = (total / 500) * 100;
        let grad =" ";
        if (percentage >= 90) { 
            grad = "A"; 
          } 
          else if (percentage >= 80) { 
            grad = "B"; 
        }
        else if (percentage >= 70) { 
            grad = "C"; 
        }
          else if (percentage >= 60) { 
            grad = "D"; 
          } 
          else if (percentage >= 40) { 
            grad = "E"; 
          } 
          else { 
            grad = "F"; 
          } 
        console.log("Percentage = " + percentage + " % : "+ "Grad "+  grad);
        
    }
 }
)



