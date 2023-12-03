// Найти 20 элементов последовательности Пизанского

const fib = [1, 1];
const n = 20;

for (let i = 2; i < n; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}

console.log(fib);