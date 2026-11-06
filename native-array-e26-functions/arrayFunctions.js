// E26 Native Arrays

// Array from

const municipalities = "Aritao";

const municipalitiesAsArray = Array.from(municipalities, character => {
    return character.toUpperCase();
});

console.log(municipalitiesAsArray)

// Array of

const barrangays = Array.of("Tucanon", "Poblacion", "Cutar");

console.log(barrangays)

// Find()

const persons = [
    {name: 'Samuel', age: 26}, 
    {name: 'Juan', age: 30},
    {name: 'Liza', age: 25}
]

const age = persons.find(findSamuel).age;

function findSamuel(person) {
    return person.name === 'Samuel';
}

console.log(age);
