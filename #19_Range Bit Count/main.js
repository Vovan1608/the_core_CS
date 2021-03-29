"use strict";

/* 
You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.
Example
For a = 2 and b = 7, the output should be
rangeBitCount(a, b) = 11.
Given a = 2 and b = 7 the array is: [2, 3, 4, 5, 6, 7]. Converting the numbers to binary, we get [10, 11, 100, 101, 110, 111], which contains 1 + 2 + 1 + 2 + 2 + 3 = 11 1s.
*/

function rangeBitCount(a, b) {
	let array = [];

	for (let i = 0; a <= b; a++, i++) {
			array[i] = a;
	}

	return array.map(el => el.toString(2)).join("").split("0").join("").length;
}

const a = 2;
const b = 7;

document.body.style.backgroundColor = "#61dafb";

const add = document.querySelector("#add");
add.style = `
	background-color: #f1f5f8;
	font-size: 36px;
	text-align: center;
	width: 50%;
	margin: 0 auto;
	border: 2px solid #000;
	border-radius: 7px;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const el = document.createElement("div");
el.innerText = rangeBitCount(a, b);

add.append(el);