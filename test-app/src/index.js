
// Lesson 1
// import captain, {useless, needless} from "./helpers";

// captain();
// useless();
// needless();

// Lesson 2
import Foods from "./Foods";
import {choice, remove} from "./Helpers";


// Randomly draw a fruit from the array
let fruit = choice(Foods);
// Log the message “I’d like one RANDOMFRUIT, please.”
console.log(`I'd like one ${fruit}, please.`);
// Log the message “Here you go: RANDOMFRUIT”
console.log(`Here you go: ${fruit}`);
// Log the message “Delicious! May I have another?”
console.log(`Delicious! May I have another?`);
// Remove the fruit from the array of fruits
let remaining = remove(Foods, fruit);
// Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”
console.log(`I'm sorry, we're all out. We have ${remaining.length} other fruits left.`);