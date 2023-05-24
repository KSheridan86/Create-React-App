// Lesson 1
// function helpful() {
//     console.log("I DID A HELP");
// }

// function useless() {
//     console.log("I DID A BOO BOO");
// }

// function needless() {
//     console.log("Listen to me!!!!!");
// }

// export default helpful;
// export { useless, needless};

// Lesson 2
function choice(items) {
    let index = Math.floor(Math.random() * items.length);
    return items[index];
}

function remove(items, item) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)];
        }
    }
}

export { choice, remove };