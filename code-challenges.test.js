/*
    ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

    Please read all questions thoroughly
    Pseudo coding is REQUIRED
    If you get stuck, please leave comments to help us understand your thought process

    Use test driven development to complete the following questions
    Add appropriate dependencies: $ yarn add jest

    Reminder: The test will call your function
    Run the file with the following command: $ yarn jest
*/

/* -------------------------- Question 1 --------------------------
Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
*/

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("arrayDeleteShuffle", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    it("Takes in an array and removes the first item from the array and returns a shuffled array with the remaining items", () => {
        const expected1 = ["yellow", "blue", "pink", "green"]   // Expected Output colors1
        const expected2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"] // Expected Output colors2

        expect(arrayDeleteShuffle(colors1)).toEqual(expect.arrayContaining(expected1))
        expect(arrayDeleteShuffle(colors2)).toEqual(expect.arrayContaining(expected2))
    })
    // it("Shuffles array to be sorted different from original array", () => {
    //     const notExpected1 = ["blue", "green", "yellow", "pink"]
    //     const notExpected2 = ["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    //     expect(arrayDeleteShuffle(colors1)).not.toEqual(notExpected1)
    //     expect(arrayDeleteShuffle(colors2)).not.toEqual(notExpected2)
    // })
})

/* Red Test Failure Completed Successfully
FAIL  ./code-challenges.test.js
arrayDeleteShuffle
  ✕ Takes in an array and removes the first item from the array and returns a shuffled array with the remaining items (2 ms)
  ✕ Shuffles array to be sorted different from original array (1 ms)

  ReferenceError: arrayDeleteShuffle is not defined
*/

// b) Create the function that makes the test pass.

/* Pseudo Code - arrayDeleteShuffle
Function Name:  arrayDeleteShuffle
Parameter(s):   any array containing any datatypes (array)
Logic:
    -   creates copy of input array (newArray)
    -   deletes first item in the newArray
    -   shuffle remaining array
        - create new shuffledArray
        - create a random number between 0 and newArray length
        - iterate over each item in newArray and assign new index using random number
            - starting from index 0 assign random item from newArray to shuffledArray
            - remove item assigned from newArray
            - repeat until all items have been re-assigned
    return shuffledArray
*/
// const arrayDeleteShuffle = (array) => {
//     const newArray = [...array]
//     const shuffledArray = []

//     newArray.shift()
//     for(let i = 0; i < array.length - 1; i++) {
//         if(typeof shuffledArray[i] === "undefined") {
//             let randomItem = Math.floor(Math.random() * newArray.length)
    
//             shuffledArray.push(newArray[randomItem])
//             newArray.splice(randomItem,1)
//         }
//     }
//     return shuffledArray
// }

/* Green Test Ran Successfully
    PASS  ./code-challenges.test.js
    arrayDeleteShuffle
        ✓ Takes in an array and removes the first item from the array and returns a shuffled array with the remaining items (2 ms)
        ✓ Shuffles array to be sorted different from original array (1 ms)
*/

/* Refactor */

const arrayDeleteShuffle = array => {
    const newArray = [...array]
    const shuffledArray = []
    newArray.shift()
    for(let i = 0; i < array.length - 1; i++) {
        let randomItem = Math.floor(Math.random() * newArray.length)
        typeof shuffledArray[i] === "undefined" ? (shuffledArray.push(newArray[randomItem]),newArray.splice(randomItem,1)):null
    }
    return shuffledArray
}

/* -------------------------- Question 2 --------------------------
Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
*/

// a) Create a test with expect statements for each of the variables provided.

describe("minMaxNums", (array) => {
    it("Takes in an array of numbers and returns an array of the smallest and largest number", () => {
        const nums1 = [3, 56, 90, -8, 0, 23, 6]     // Expected output: [-8, 90]
        const nums2 = [109, 5, 9, 67, 8, 24]        // Expected output: [5, 109]
        expect(minMaxNums(nums1)).toEqual([-8, 90])
        expect(minMaxNums(nums2)).toEqual([5, 109])
    })
})


/* Red Test Failed Successfully
    FAIL  ./code-challenges.test.js
    arrayDeleteShuffle
        ✓ Takes in an array and removes the first item from the array and returns a shuffled array with the remaining items (3 ms)
    minMaxNums
        ✕ Takes in an array of numbers and returns an array of the smallest and largest number (1 ms)
    ReferenceError: minMaxNums is not defined
*/

// b) Create the function that makes the test pass.
/* Pseudo Code
    Function Name: minMaxNums
    Parameters:     array of numbers (numsArray)
    Logic:
        -   create variables to store smallest and largest number
            - smallest number   = smallest
                - assign to numsArray[0]
            - biggest number    = biggest
                - assign to numsArray[0]
        -   iterate over each item in list
            -   if number is greater than biggest the number gets assigned to biggest variable
            -   if number is smaller than smallest, the number gets assigned to smallest variable
        -   once each item has been checked
        -   return array of smallest and biggest
*/


// const minMaxNums = (numsArray) => {
//     let smallest = numsArray[0]
//     let biggest  = numsArray[0]

//     for(let i = 0; i < numsArray.length; i++) {
//         if(numsArray[i] > biggest) {
//             biggest = numsArray[i]
//         } else if(numsArray[i] < smallest) {
//             smallest = numsArray[i]
//         } 
//     }

//     let nums = [smallest, biggest]
//     return nums
// }

/* Green Test Ran Successfully
    PASS  ./code-challenges.test.js
    arrayDeleteShuffle
        ✓ Takes in an array and removes the first item from the array and returns a shuffled array with the remaining items (2 ms)
    minMaxNums
        ✓ Takes in an array of numbers and returns an array of the smallest and largest number (1 ms)
*/

/* Refactor */

const minMaxNums = numsArray => {
    const nums = numsArray.sort((num1, num2) => num1 - num2)
    return [nums[0], nums[nums.length-1]]
}


/* -------------------------- Question 3 --------------------------
Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
*/

// a) Create a test with an expect statement using the variables provided.

describe("combineArrays", (array1, array2) => {
    it("Should take in two arrays and returns one array with no duplicate values", () => {
        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4]
        const expectedArray = [3, 7, 10, 5, 4, 8, 2, 1]

        expect(combineArrays(testArray1, testArray2)).toEqual(expectedArray)
    })
})

/* Red Test Failed Successfully
    FAIL  ./code-challenges.test.js
    arrayDeleteShuffle
        ✓ Takes in an array and removes the first item from the array and returns a shuffled array with the remaining items (2 ms)
    minMaxNums
        ✓ Takes in an array of numbers and returns an array of the smallest and largest number
    combineArrays
        ✕ Should take in two arrays and returns one array with no duplicate values (1 ms)
    combineArrays is not defined
*/

// b) Create the function that makes the test pass.

/* Pseudo Code
    Function Name: combineArrays
    Parameters:     two arrays containing any datatypes as values
                        - names of params are array1 and array2
    Logic:
        -   create new array to store both arrays
            -   make new array name = combArray
        -   iterate over array2
            - if item in array2 isn't in array1 add to end of combArray
        - once each item has been checked in array2 return combArray
*/

// const combineArrays = (array1, array2) => {
//     const combArray = []
//     for(let i = 0; i < array1.length; i++) {
//         if(!combArray.includes(array1[i])) {
//             combArray.push(array1[i])
//         }
//     }
//     for(let i = 0; i < array2.length; i++) {
//         if(!combArray.includes(array2[i])) {
//             combArray.push(array2[i])
//         }
//     }
//     return combArray
// }

/* Green Test Passed Successfully
    PASS  ./code-challenges.test.js
    arrayDeleteShuffle
        ✓ Takes in an array and removes the first item from the array and returns a shuffled array with the remaining items (2 ms)
    minMaxNums
        ✓ Takes in an array of numbers and returns an array of the smallest and largest number
    combineArrays
        ✓ Should take in two arrays and returns one array with no duplicate values (1 ms)
*/

/* Refactor */

const combineArrays = (array1, array2) => [...new Set([...array1, ...array2])]