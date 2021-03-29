"use strict";

/* 
Presented with the integer n, find the 0-based position of the second rightmost zero bit in its binary representation (it is guaranteed that such a bit exists), counting from right to left.
Return the value of 2position_of_the_found_bit.
Example
For n = 37, the output should be
secondRightmostZeroBit(n) = 8.
37(10) = 100101(2). The second rightmost zero bit is at position 3 (0-based) from the right in the binary representation of n.
Thus, the answer is 23 = 8.
*/

function secondRightmostZeroBit(n) {
	return 2 ** (Number([...n.toString(2)].reverse().map((el, i) => {
		if (Number(el) === 0) {
			return i;
		}
	}).join("")[1]));

	// return ~(n |= -~n) & -~n;
}

const n = 37; // -> 8 = 2 ** 3
// const n = 83748; // -> 2 = 2 ** 1

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
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
`;

const el = document.createElement("div");
el.innerText = secondRightmostZeroBit(n);

add.append(el);