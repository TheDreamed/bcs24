console.log()

console.log("Hello, Welcome to De La Salle University!")

firstName = 'Mark Spencer ';
lastName = 'Jordan';
age = 21;
hobbies = ['Working out', 'Coding', 'Reading', 'Playing League', 'Visiting Coffee Shops'];

homeAddress = {
    houseNumber: 'Block 2 Lot 15',
    street: ' Saturn',
    villSub: ' Lessandra Camella Phase 6',
    barangay: ' Salinas II',
    city: ' Bacoor',
    province: ' Cavite',
    zipCode: ' 4102'
};

console.log("Hi I'm " + firstName + lastName + "I'm " + age + " years young. \n");
console.log("My Hobbies are: \n");

for (let i = 0; i < hobbies.length; i++) {
	console.log(hobbies[i]);
}


console.log()
console.log("Here's my Address \n");
console.log(homeAddress);
console.log("Thank you for viewing!");
