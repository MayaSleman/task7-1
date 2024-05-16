//min && max
let btn =document.getElementById("btn");
btn.addEventListener('click' ,() => {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let number3 = document.getElementById("number3").value;
    let maxElement = Math.max(number1, number2, number3);
    let minElement = Math.min(number1, number2, number3);
    
    console.log(`max element = ${maxElement}`);
    console.log(`min element = ${minElement}`);
}
)
// vowel && consonant
let btn1 = document.getElementById("btn1");
btn1.addEventListener('click' ,() => {
let text = document.getElementById("text").value;
const vowels = ['a', 'e', 'i', 'o', 'u'];
if (text!== null && text.length === 1){
    if(vowels.includes(text.toLowerCase())){
        console.log("vowel");
    }else{
        console.log("consonant");
    }
}
else{
    console.log("please enter one character");
}
})
// option 2:
// let btn1 = document.getElementById("btn1");
// btn1.addEventListener('click' ,() => {
//     let text =document.getElementById("text").value;
//     let text1 = text.toLowerCase();
//     if(text1.length==1){
//         if (text1 == 'a' || text1 == 'e' || text1 == 'i' || text1 == 'o' || text1 == 'u') {
//             console.log("vowel");
//             } else if (text1 >= 'a' && text1 <= 'z') {
//               console.log("consonant");
//             } else {
//                 console.log("Invalid please enter an alphabet");
//              }
//     }
//     else{
//         console.log("please enter one character");
//     }
// }
// )

//multiplication table up to 12.
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
//even numbers
let btn3 = document.getElementById("btn3");
btn3.addEventListener('click' ,() => {
    let number = document.getElementById("number").value;
    let result1="";
    for(let j = 1; j <= number ; j++) {
        if(j%2 == 0){
            result1 = result1 +" "+ j;
        }
    }
    console.log(result1);
}
)
// total && average && percentage.
let btn4 = document.getElementById("btn4");
btn4.addEventListener('click' ,() => {
      let mark = document.querySelectorAll(".mark");
      let total=0;
      for(let i=0 ; i < mark.length ; i++){
        if(mark[i].value != ""){
            if (mark[i].value >= 0 && mark[i].value <=100){
                total +=parseInt(mark[i].value);
         }else{
                console.log("Please enter a mark between 0 and 100");
                return;
         }}
        else{
            console.log("empty Please enter a mark");
            return;
        }
        }
      console.log(`Total marks = ${total}`);
            let average = total / 5;
            console.log(`Average Marks = ${average}`);
            let percentage = (total / 500) * 100;
            console.log(`Percentage = ${percentage} %`);
      });
// option2:
// let btn4 = document.getElementById("btn4");
// btn4.addEventListener('click' ,() => {
//     let mark1 = document.getElementById("mark1").value;
//     let mark2 = document.getElementById("mark2").value;
//     let mark3 = document.getElementById("mark3").value;
//     let mark4 = document.getElementById("mark4").value;
//     let mark5 = document.getElementById("mark5").value;
//     if (mark1 == ""|| mark2 == "" || mark3 == "" || mark4 == "" || mark5 == "") { 
//         console.log("Please enter a mark");
//     }
//     else{
//     let total =parseInt( mark1)+ parseInt( mark2) +parseInt( mark3)+ parseInt( mark4) + parseInt( mark5) ;
//     console.log(`Total marks = ${total}`);
//     let average = total / 5;
//     console.log(`Average Marks = ${average}`);
//     let percentage = (total / 500) * 100;
//     console.log(`Percentage = ${percentage} % `);
//  }
// }
// )

//percentage && grade
let btn5 = document.getElementById("btn5");
btn5.addEventListener('click' ,() => {
    let subjectMark = document.querySelectorAll(".subjectMark");
    let total=0;
      for(let i=0 ; i < subjectMark.length; i++){
        if(subjectMark[i].value != ""){
            if (subjectMark[i].value >= 0 && subjectMark[i].value <=100){
                total += parseInt(subjectMark[i].value);
         }else{
                console.log("Please enter a mark between 0 and 100");
                return;
         }}
        else{
            console.log("empty Please enter a mark");
            return;
        }
        }
        let percentage = (total / 500) * 100;
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
            console.log(`Percentage =  ${percentage}  % : Grad  ${grad}`);
      });
//option 2
// let btn5 = document.getElementById("btn5");
// btn5.addEventListener('click' ,() => {
//     let physics = document.getElementById("physics").value;
//     let chemistry = document.getElementById("chemistry").value;
//     let biology = document.getElementById("biology").value;
//     let math = document.getElementById("math").value;
//     let computer = document.getElementById("computer").value;
//     if (physics == ""|| chemistry == "" || biology == "" || math == "" || computer == "") { 
//         console.log("Please enter a mark");
//     }
//     else{
//         let total = parseInt(physics) + parseInt(chemistry) + parseInt(biology) + parseInt(math) + parseInt(computer) ;
//         let percentage = (total / 500) * 100;
//         let grad =" ";
//         if (percentage >= 90) { 
//             grad = "A"; 
//           } 
//           else if (percentage >= 80) { 
//             grad = "B"; 
//         }
//         else if (percentage >= 70) { 
//             grad = "C"; 
//         }
//           else if (percentage >= 60) { 
//             grad = "D"; 
//           } 
//           else if (percentage >= 40) { 
//             grad = "E"; 
//           } 
//           else { 
//             grad = "F"; 
//           } 
//           console.log(`Percentage =  ${percentage}  % : Grad  ${grad}`);
        
//     }
//  }
// )