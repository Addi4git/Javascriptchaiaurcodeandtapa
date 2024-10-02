// LECTURE 15


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);  // arrays are not cancatenated but they will form a nested Arrays
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // concat can merge two arrays into a new Array.
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]   // spread operator is used for same purpose and it is most preffered one.

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)   // it will combine array in one
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));