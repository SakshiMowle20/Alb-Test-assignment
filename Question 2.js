//Given a string s and a array of strings wordArray, return true if s can be segmented into a
// space-separated sequence of one or more array words.
// Note that the same word in the array may be reused multiple times in the segmentation.





function string (s, wordArray) {
    if (s === '') {
        return true; // Empty string can always be segmented
    }

    for (let i = 1; i <= s.length; i++) {
        const prefix = s.substring(0, i);
        if (wordArray.includes(prefix) && string(s.substring(i), wordArray)) { 
             //  if wordArray, indicating that prefix is a valid word.operator combines two conditions and returns true 
            return true;
        }
    }

    return false;
}
const Exone = "catsandog";
const wordArray = ["cats", "dog", "sand", "and", "cat"];
const result = string(Exone, wordArray);

console.log(result); // Output: false


const Extwo = "leetcode";
const wordArray1 = ["leet", "code"];
const result1 = string(Extwo, wordArray1);

console.log(result1);