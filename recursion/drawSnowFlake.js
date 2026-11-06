// This function recursively calculates the total length/scale of a fractal
// snowflake based on its initial length and recursion depth.

function drawSnowFlake(length, depth) {
    // base case
    if (depth === 0){
        return length;
    }
    // recursive call
    else {
        let result =  parseFloat(4 * drawSnowFlake(length / 3, depth - 1).toFixed(2));
        return result;
    }
}

console.log(`You're snowflake has ${drawSnowFlake(6, 0)} corners!`);
console.log(`You're snowflake has ${drawSnowFlake(6, 3)} corners!`);
console.log(`You're snowflake has ${drawSnowFlake(15, 6)} corners!`);