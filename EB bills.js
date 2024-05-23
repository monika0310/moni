let units = 90;
let cost = 0;

for (let i = 1; i <= units; i++) {
    if (i <= 100) {
        cost += 10;
    } else if (i <= 200) {
        cost += 15;
    } else if (i <= 300) {
        cost += 20;
    } else {
        cost += 25;
    }
}

console.log("Cost for", units, "units:", cost);