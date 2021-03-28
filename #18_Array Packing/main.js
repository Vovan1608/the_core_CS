"use strict";

/* 
You are given an array of up to four non-negative integers, each less than 256.

Your task is to pack these integers into one number M in the following way:

The first element of the array occupies the first 8 bits of M;
The second element occupies next 8 bits, and so on.
Return the obtained integer M.

Note: the phrase "first bits of M" refers to the least significant bits of M - the right-most bits of an integer. For further clarification see the following example.

Example

For a = [24, 85, 0], the output should be
arrayPacking(a) = 21784.

An array [24, 85, 0] looks like [00011000, 01010101, 00000000] in binary.
After packing these into one number we get 00000000 01010101 00011000 (spaces are placed for convenience), which equals to 21784
*/

function arrayPacking(a) {
	return parseInt(a.reverse().map(el => {
		if (el.toString(2).length === 8) {
			return el.toString(2);
		}  else {
			const dif = 8 - el.toString(2).length;
			return "0".repeat(dif) + el.toString(2);
		}
	}).join(""), 2);

	//a.reduceRight((pre, val) => pre * 256 + val, 0)
}

const a = [24, 85, 0];

const add = document.querySelector("#add");
add.style = `
	background-color: #f1f5f8;
	font-size: 36px;
	text-align: center;
	border: 2px solid #000;
	border-radius: 7px;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const el = document.createElement("div");
el.innerText = arrayPacking(a);

document.body.style.backgroundColor = "#61dafb";

add.append(el);