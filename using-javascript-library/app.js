const sampleArray = ['water','earth', 'fire', 'wind', 'nature'];

// using loadash JavaScript Library

// using chunk
const newArray = _.chunk(sampleArray, 2); // creates new arrays

console.log(`chunk: ${newArray}`);

// using difference
const newArray2 = _.difference(sampleArray, ['water', 'fire']); // removes items inside the array

console.log(`difference: ${newArray2}`);

// using join
const newArray3 = _.join(sampleArray, [',']);

console.log(`join: ${newArray3}`);

// using concat
const newArray4 = _.concat(sampleArray, ['metal']);

console.log(`concat: ${newArray4}`);

