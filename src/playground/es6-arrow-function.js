// const square = function (x) {
//     return x * x;
// }

// const squareArrow = (x) => x * x;

// console.log(squareArrow(10))

const add = (a, b) => {
    //console.log(arguments)
    return a + b;
};

console.log(add(2, 3, 101));

const user = {
    name: 'Shane',
    cities: ['Dublin', 'Douglas'],
    printPlacesLived() {
        return this.cities.map(city => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());
