var pt = { x: 100, y: 200, z: 500 };
pt.x = 200;
pt.z = 6000;
var thomas = {
    id: 1,
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    sayHi: function () {
        return 'Hello World';
    }
};
var shoes = {
    name: 'shoes',
    price: 100,
    applyDiscount: function (discount) {
        if (discount === void 0) { discount = 1; }
        var newPrice = this.price - discount;
        return newPrice;
    }
};
var elton = {
    name: 'Elton',
    age: 0.5,
    breed: 'Shepherd',
    bark: function () {
        return 'woof';
    }
};
// type Dog =  {
//   name: string;
//   age: number;
// }
// type Dog = {
//   breed: string;
//   bark: () => string
// }
// const elton: Dog = {
//   name: 'Elton',
//   age: 0.5,
//   breed: 'Shepherd',
//   bark: () => {
//     return 'woof'
//   }
// }
