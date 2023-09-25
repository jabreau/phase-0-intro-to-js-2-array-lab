const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}
destructivelyAppendCat("Dog");

function destructivelyPrependCat(name) {
    cats.unshift(name);
}
destructivelyPrependCat("Bread");

function destructivelyRemoveLastCat() {
    cats.pop();
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
    cats.shift();
}
destructivelyRemoveFirstCat();

function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}
appendCat("Broom");

function prependCat(name) {
    const otherCats = [name, ...cats];
    return otherCats;
}
prependCat("Mop");

function removeLastCat() {
    const minusLastCat = [...cats.slice(0, -1)];
    return minusLastCat;
}
removeLastCat;

function removeFirstCat() {
    const minusFirstCat = [...cats.slice(1)];
    return minusFirstCat;
}
removeFirstCat;