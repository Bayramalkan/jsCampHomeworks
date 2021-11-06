function perfectNumber() {

  for (let i = 1; i < 1000; i++) {
    let sum = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        sum = sum + j;
      }
    }
    if (sum == 2 * i) {
        console.log("Mükemmel sayı: "+ i);
    }
  }
}
perfectNumber();

