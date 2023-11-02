// Q4) Given an array of non-negative integers nums, arrange them such that they form the largest
// number and return it.Note return the result in the form of string

function largNum(nums) {
    nums = nums.map(String); //  use of map to convert numbers to strings
    
    nums.sort((a, b) => {
        const order1 = a + b; 
        const order2 = b + a; // Concatenate a+b and b+a
        
        return order2.localeCompare(order1); // compare strings
    });
    
    if (nums[0] === '0') {
        return '0';
    }
    
    return nums.join('');  //  concatenate the sorted strings into a single string, 

}
    
const nums = [3, 30, 34, 5, 9];
const result = largNum(nums);
console.log(result);

