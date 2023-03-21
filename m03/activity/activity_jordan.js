console.log("Hello, Welcome to De La Salle University!")

function computeSupply(age, amountPerDay){
    max_age = 100;
    totalRounded =  Math.round((max_age - age) * amountPerDay * 365);
    console.log(`You need to ${total} to last you until the ripe old age of ${age}`)
    console.log('Age:' + age)
    console.log('Amount Per Day:'+ amountPerDay)
    console.log('Rest of life total:' + total)
}
computeSupply(21, 2.5)
computeSupply(31, 5)
computeSupply(52, 3)
