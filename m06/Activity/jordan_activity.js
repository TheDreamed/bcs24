function oddEvenChecker(num){
    if(typeof(num) === "number")
    {
        if(num % 2 === 0)
        {
            console.log("The number is even.")
        }
        else
        {
            console.log("The number is odd.")
        }
    }
    else
    {
        console.log("Invalid Input")
    }
}

oddEvenChecker(10)
oddEvenChecker(9)
oddEvenChecker('hakdog')

function budgetChecker(number){
    if(typeof(number) === "number")
    {
        if(number > 40000)
        {
            console.log("You are over the budget.")
        }
        else
        {
            console.log("You have resources left.")
        }
    }
    else
    {
        console.log("Given is not a number!")
    }
}
budgetChecker(41000)
budgetChecker(39000)
budgetChecker('hakdog')
