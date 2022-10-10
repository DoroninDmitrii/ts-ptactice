function square(num) {
    return num * num;
}
square('hey');
square(12);
function greet(person) {
    if (person === void 0) { person = 'Dima'; }
    return "Hey, ".concat(person);
}
greet();
