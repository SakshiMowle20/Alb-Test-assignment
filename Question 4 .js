// Q1) Write a function that takes an integer 'x'(greater than 0) as input and returns a new integer
// formed by reversing the digits of 'x' without using any built-in methods for reversal. After
// reversing the digits, determine whether the resulting number has any prime factors. If it does
// have prime factors, return 'Yes' along with the list of prime factors; otherwise, return 'No'."


function reversing(x) {
    let inte = 0;
    while (x > 0) {
        inte = inte * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return inte;
}