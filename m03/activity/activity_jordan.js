console.log("Hello, Welcome to De La Salle University!")

function computeSupply(age, amountPerDay){
    total =  Math.round((365*age)*amountPerDay);
    console.log(`You need to ${total} to last you until the ripe old age of ${age}`)
}
computeSupply(21, 2.5)
computeSupply(31, 5)
computeSupply(52, 3)
