let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let add = document.querySelector("#plus");
let sub = document.querySelector("#sub");
let mul = document.querySelector("#mul");
let divi = document.querySelector("#divi");
let display_result = document.querySelector("#display_result")

add.addEventListener("click", function(){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);

    display_result.innerHTML = addTwoNumbers(num_1, num_2);
})

sub.addEventListener("click", function(){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    
    display_result.innerHTML = diffTwoNumbers(num_1, num_2);
})

mul.addEventListener("click", function(){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
   
    display_result.innerHTML = mulTwoNumbers(num_1, num_2);
})

divi.addEventListener("click", function(){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);

    display_result.innerHTML = divTwoNumbers(num_1, num_2);
})

function addTwoNumbers(a,b){
    let sum = a + b;
    return sum;
}

function diffTwoNumbers(a,b){
    let diff = a - b;
    return diff;
}

function mulTwoNumbers(a,b){
    let mul = a * b;
    return mul;
}

function divTwoNumbers(a,b){
    let div = a / b;
    return div;
}