/*
    Idea:
        1. Get the first index and last index of the element
        2. Find rhe rande from first and last index

    TC: O(log N)
    SC: O(1)
*/

const { findFirstOccuranceEleInSortedArray }  = require("./firstOccuranceEleinSortedArr");
const { findLastOccuranceEleInSortedArray } = require("./lastOccuranceEleinSortedArr");

const A =  [2,2,5,5,5,5,8,10,10,13,13,13,13];

const ele = 8;
const startIndex = findFirstOccuranceEleInSortedArray(A, ele, 0, A.length-1);
const lastIndex = findLastOccuranceEleInSortedArray(A, ele, 0, A.length-1);
const result = lastIndex - startIndex + 1;

console.log("Total occurance of an element in an array = ",result);