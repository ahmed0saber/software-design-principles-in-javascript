// DON'T
const getSaleInPounds = (...prices) => {
    return prices[0] - prices[1]
}
getSaleInPounds(200, 100)

// use rest parameters operator only if the number of parameters is dynamic
// for example, getting the sum of unkwown number of numbers
// using something like rest parameters operator for a simple task, will add complexity to it
