const change = document.getElementById('change');
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
const boll = document.getElementById('boll')

let isTrue = 0

change.addEventListener('click', () => {
  isTrue++
  if(isTrue == 1){
    change.style.justifyContent = 'end'
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = '#5a1e82f5'
    display.style.border = '5px solid blueviolet'
    return
  }
  else{ 
    document.body.style.backgroundImage = 'url(cal_1.jpg)'
    display.style.border = 'none  '
    change.style.justifyContent = 'start'
    isTrue = isTrue - 2
    
  }
})

let expression = '';
let result = 0;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.textContent; 

    switch (value) {
      case 'AC':
        expression = '';
        result = 0;
        display.value = '0';
        break;
      case 'X':
        expression = expression.slice(0, -1);
        display.value = expression;
        break;
        case '=':
          try {
            result = eval(expression);
            display.value = result;
            expression = result.toString();
          } catch (error) {
            display.value = 'Error';
            expression = '';
        }
        break;
      default:
        expression = expression +  value;
        console.log(expression);
        display.value = expression;
      }
    });
  });

  
  /*
  
  let a = document.getElementsByClassName("button")
  let operator = prompt("Enter Operator (/,*.,+,-,%)")
  let b = document.getElementsByClassName("button")
  let r_Number = Math.random()
  console.log(r_Number)
  if(r_Number > 0.5)
  switch (operator) {
      case '+':
          console.log("The Sum of " + a + " & " + b + " is " +a+b)
          break;
      case '-':
          console.log("The Difference of " + a + " & " + b + " is " + a-b)
          break;
      case '*':
          console.log("The Multiplication of " + a + " & "  + b + " is "  + a*b)
          break;
      case '/':
          console.log("The Divison of " + a + " & " + b + " is " + a/b)
          break;
      case '%':
          console.log("The Reminder of " + a + " & " + b + " is " +a%b)
          break; 
  
      default:
          console.log("You Enter Wrong Operator")
          alert("Chela ja ......")
          break;
  }
  else{
      switch (operator) {
          case '+':
              console.log("The Sum of " + a + " & " + b + " is " +a-b)
              break;
          case '-':
              console.log("The Difference of " + a + " & " + b + " is " + a+b)
              break;
          case '*':
              console.log("The Multiplication of " + a + " & " + b + " is " +a/b)
              break;
          case '/':
              console.log("The Divison of " + a + " & " + b + " is " +a*b)
              break;
          case '%':
              console.log("Nikelwau Modulas chela ja tu....")
              break; 
      
          default:
              console.log("You Enter Wrong Operator")
              alert("Chela ja ......")
              break;
      }
  }
  
  */