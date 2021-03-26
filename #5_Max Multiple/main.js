"use strict";

/* 
Given a divisor and a bound, find the largest integer N such that:
N is divisible by divisor.
N is less than or equal to bound.
N is greater than 0.
It is guaranteed that such a number exists.
Example
For divisor = 3 and bound = 10, the output should be
maxMultiple(divisor, bound) = 9.
The largest integer divisible by 3 and not larger than 10 is 9.
*/

function maxMultiple(divisor, bound) {
  return Math.floor(bound / divisor) * divisor;
}

const divisor = 4;
const bound = 10;

const add = document.querySelector("#add");
add.style = `
	background-color: #61dafb;
	text-align: center;
	font-size: 36px;
	border: 2px solid black;
	border-radius: 7px;
`;

const el = document.createElement("div");
el.innerText = maxMultiple(divisor, bound);

add.append(el);
