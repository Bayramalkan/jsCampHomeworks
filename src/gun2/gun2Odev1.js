function findPrime(...numbers) {
    let primes = []
    let nonPrimes = []

    for(let i=0; i<numbers.length; i++){
        var isPrime = true;

        for(let j=2; j<numbers[i]; j++){
            if(numbers[i]%j ==0){
                isPrime = false;
            }
        }

        if(isPrime){
            primes.push(numbers[i])
        }
        else{
            nonPrimes.push(numbers[i])
        }
    }

    console.log("Asal sayilar : ", ...primes);
    console.log("Asal olmayan sayialar : ",...nonPrimes);
}

findPrime(2,5,7,8,11,9,15)