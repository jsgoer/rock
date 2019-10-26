let startTime = new Date().getTime();
let sum = 0;
for (let i = 0; i < 987654321; i++) {
    sum = sum + i;
}
let entTime = new Date().getTime();
console.log(sum);
console.log((entTime - startTime) / 1000);