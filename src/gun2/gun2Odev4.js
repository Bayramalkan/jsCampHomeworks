function findPrimeList() {
    let primes = []

    for(let i=2; i<1000; i++){
        let isPrime = true
        for(let j=2; j<i; j++){
            if(i%j==0){
                isPrime= false
            }
        }
        if(isPrime){
        primes.push(i)
    }
    }
    
    console.log(...primes);
    console.log(primes.length);
}
findPrimeList()