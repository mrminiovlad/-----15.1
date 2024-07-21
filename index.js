const M = 1;
const N = 1000;

function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

for (let i = M; i <= N; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}