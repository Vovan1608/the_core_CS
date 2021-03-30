"use strict";

/* 
You're given two integers, n and m. Find position of the rightmost bit in which they differ in their binary representations (it is guaranteed that such a bit exists), counting from right to left.
Return the value of 2position_of_the_found_bit (0-based).
Example
For n = 11 and m = 13, the output should be
differentRightmostBit(n, m) = 2.
11(10) = 1011(2), 13(10) = 1101(2), the rightmost bit in which they differ is the bit at position 1 (0-based) from the right in the binary representations.
So the answer is 21 = 2.
For n = 7 and m = 23, the output should be
differentRightmostBit(n, m) = 16.
7(10) = 111(2), 23(10) = 10111(2), i.e.
00111
10111
So the answer is 24 = 16.
*/

function differentRightmostBit(n, m) {
  return getArrayFromNum(n).length === getArrayFromNum(m) ? 
	[getArrayFromNum(n), getArrayFromNum(m)] :
	[getArrIfDif(getArrayFromNum(n), getArrayFromNum(m))];
}

const getArrayFromNum = (num) => [...num.toString(2)].reverse();

const addedZeroAfter = (arr, dif) => arr.join("") + "0".repeat(dif);

const getDif = (arr1, arr2) => Math.abs(arr1.length - arr2.length);

const getArrIfDif = (arr1, arr2) => arr1.length > arr2.length ?
	[arr1, addedZeroAfter(arr2, getDif(arr1, arr2))] : 
	[addedZeroAfter(arr1, getDif(arr1, arr2)), arr2];

// 
const n = 11;
const m = 13;

// const n = 7;
// const m = 23;

document.body.style.backgroundColor = "#61dafb";

const add = document.querySelector("#add");
add.style = `
	width: 50%;
	background-color: #f1f5f8;
	font-size: 36px;
	text-align: center;
	margin: 100px auto;
	border: 2px solid #000;
	border-radius: 7px;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const el = document.createElement("div");
el.innerText = differentRightmostBit(n, m);

add.append(el);