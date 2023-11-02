function anagrams(arr) {
    const anagroup = {};

    for (const str of arr) {
        const sortedStr = str.split('').sort().join('');

        if (!anagroup[sortedStr]) {
            anagroup[sortedStr] = []; 
            // if sortedStr is not a key in anagramGroups, then it creates a new empty array for it 
        }

        anagroup[sortedStr].push(str); // adding current string in the  anagroup
    }

    return Object.values(anagroup); 
}



const input = ["a"];
const result = anagrams(input);
console.log(result);

const input1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result1 = anagrams(input1);
console.log(result1);