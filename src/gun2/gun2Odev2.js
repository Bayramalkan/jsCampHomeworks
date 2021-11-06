
function friendlyNumbers(number1,number2) {
    let divisors = []
    let num1_divisors_sum = 0
    let num2_divisors_sum = 0
    

    for(let i=1; i<number1; i++){
        if(number1 % i == 0){
            num1_divisors_sum = num1_divisors_sum + i
        }
    }
    for(let i=1; i<number2; i++){
        if(number2 % i == 0){
            num2_divisors_sum = num2_divisors_sum + i
        }
    }

    if(num1_divisors_sum == number2 && num2_divisors_sum==number1){
        console.log(number1 +" ve " +number2 + " arkadaş sayilardir");
    }else{
        console.log(number1 +" ve " +number2 + " arkadaş sayi değildirler");    }
    
    
}
friendlyNumbers(220,284)
