function calculateParentsAge(myAge) {
    const mumAge = myAge * 2;
    const dadAge = mumAge * 1.2;

    console.log("My mum's age: " + mumAge);
    console.log("My dad's age: " + dadAge);
}

const myAge = 25;
calculateParentsAge(myAge);