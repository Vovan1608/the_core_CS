"use strict";

/* 
You're given an arbitrary 32-bit integer n. Take its binary representation, split bits into it in pairs (bit number 0 and 1, bit number 2 and 3, etc.) and swap bits in each pair. Then return the result as a decimal number.
Example
For n = 13, the output should be
swapAdjacentBits(n) = 14.
13(10) = 1101(2) ~> {11}{01}2 ~> 1110(2) = 14(10).
For n = 74, the output should be
swapAdjacentBits(n) = 133.
74(10) = 01001010(2) ~> {01}{00}{10}{10}2 ~> 10000101(2) = 133(10).
Note the preceding zero written in front of the initial number: since both numbers are 32-bit integers, they have 32 bits in their binary representation. The preceding zeros in other cases don't matter, so they are omitted. Here, however, it does make a difference.
*/

function swapAdjacentBits(n) {
  return parseInt(
		[...(n.toString(2).length % 2 === 0 ? n.toString(2) : "0" + n.toString(2))].map((el, i, arr) => {
			if (i % 2 === 0) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				return arr[i];
			} else {
				return el;
			}
		}).join(""), 2);

	// return parseInt(n.toString(2).padStart(32, `0`).replace(/(.)(.)/g, `$2$1`), 2);
	// return ((n & 0xaaaaaaaa) >> 1) | ((n & 0x55555555) << 1);
}

// const n = 13; // -> 14
const n = 74; // -> 133

document.body.style.backgroundColor = "#61dafb";

const add = document.querySelector("#add");
add.style = `
	background-color: #f1f5f8;
	font-size: 36px;
	width: 50%;
	text-align: center;
	margin: 100px auto;
	border: 2px solid #000;
	border-radius: 7px;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const el = document.createElement("div");
el.innerText = swapAdjacentBits(n);

add.append(el);