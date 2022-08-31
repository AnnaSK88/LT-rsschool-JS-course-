// naming: connect HTML with JS

let numbers = document.getElementsByClassName('number'),
    operations = document.getElementsByClassName('operator'),
    decimalBtn = document.getElementById('decimalBtn'),
    clearBtns = document.getElementsByClassName('clear_btn'),
    plusMinus = document.getElementById('plMn'),
    display = document.getElementById('display');

  
  

// extra  global variables
let MemoryCurrentNumber = 0 ,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';


// event handler 
for(let i=0; i < numbers.length; i++){
    let number = numbers[i];
    number.addEventListener('click', function(e){
        numberPress(e.target.innerHTML)
    });
};


for(let i=0; i < operations.length; i++){
    let operationBtn = operations[i];
    operationBtn.addEventListener('click', function(e){
        operation(e.target.textContent)})
};

for(let i=0; i < clearBtns.length; i++){
    let clearBtn = clearBtns[i];
    clearBtn.addEventListener('click', function(e){
        clear(e.target.innerHTML);
    })
};

decimalBtn.addEventListener('click', decimalAdd);
plusMinus.addEventListener('click', plusMinusAdd);




// add the main function
function numberPress(number){
    
    if (MemoryNewNumber){
        display.value = number;
        MemoryNewNumber = false;
    } else {
        if(display.value === '0'){
            display.value = number;
        } else {
            display.value += number;
        };
    }
    if (display.value.length > 10) { display.value =  display.value.substr(0,10)} 
};


function operation(op){
  let localOperationMemory = display.value;

 if (MemoryNewNumber && MemoryPendingOperation !== "=") {
     display.value = MemoryCurrentNumber;
 }  else {
     MemoryNewNumber = true;
        if (MemoryPendingOperation === "+"){ 
         MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === "-"){
            MemoryCurrentNumber -= parseFloat(localOperationMemory);
        }  else if ( MemoryPendingOperation === "*"){
            MemoryCurrentNumber *= parseFloat(localOperationMemory);
        }  else if (MemoryPendingOperation === "/"){
            MemoryCurrentNumber /= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === "^"){
            MemoryCurrentNumber = MemoryCurrentNumber ** parseFloat(localOperationMemory); 
        
        } else if (MemoryPendingOperation === "√"){
            MemoryCurrentNumber = Math.sqrt(MemoryCurrentNumber); 
        
        }  else {
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        };
        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = op;

 };
   if (MemoryPendingOperation === "√") {
     display.value = Math.sqrt(MemoryCurrentNumber)
    }
   };


function decimalAdd(argument){
    let localDecimalMemory = display.value
    if (MemoryNewNumber){
        localDecimalMemory ="0.";
        MemoryNewNumber = false;
    } else {
        if (localDecimalMemory.indexOf('.')=== -1){
            localDecimalMemory += ".";
        };
    };
    display.value = localDecimalMemory;

};

function clear(id){
   if(id === 'ce'){
     display.value = '0';
     MemoryNewNumber = true;
   } else if (id === 'c'){
    display.value = '0';
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0;
    MemoryPendingOperation ='';
   } 
};



function plusMinusAdd(argument){
    let negativeNumber = parseFloat(display.value) * (-1);
    display.value = negativeNumber; 

};

