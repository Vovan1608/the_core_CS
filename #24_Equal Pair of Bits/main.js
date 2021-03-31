"use strict";

/* 
You're given two integers, n and m. Find position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.
Return the value of 2 ** position_of_the_found_pair (0-based).
Example
For n = 10 and m = 11, the output should be
equalPairOfBits(n, m) = 2.
10(10) = 1010(2), 11(10) = 1011(2), the position of the rightmost pair of equal bits is the bit at position 1 (0-based) from the right in the binary representations.
So the answer is 2 ** 1 = 2.
*/

function equalPairOfBits(n, m) {
  return ;
}

const n = 10;
const m = 11;

document.body.style.backgroundColor = "#61dafb";

const add = document.querySelector("#add");
add.style = `
	background-color: #f1f5f8;
	width: 50%;
	margin: 20px auto;
	text-align: center;
	border: 2px solid #000;
	border-radius: 7px;
	font-size: 36px;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const el = document.createElement("div");
el.innerText = equalPairOfBits(n, m);

add.append(el);