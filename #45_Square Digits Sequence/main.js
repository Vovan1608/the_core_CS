"use strict";

/* 
Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.

Given the first element a0, find the length of the sequence.

Example

For a0 = 16, the output should be
squareDigitsSequence(a0) = 9.

Here's how elements of the sequence are constructed:

a0 = 16
a1 = 12 + 62 = 37
a2 = 32 + 72 = 58
a3 = 52 + 82 = 89
a4 = 82 + 92 = 145
a5 = 12 + 42 + 52 = 42
a6 = 42 + 22 = 20
a7 = 22 + 02 = 4
a8 = 42 = 16, which has already occurred before (a0)
Thus, there are 9 elements in the sequence.

For a0 = 103, the output should be
squareDigitsSequence(a0) = 4.

The sequence goes as follows: 103 -> 10 -> 1 -> 1, 4 elements altogether.
*/

function squareDigitsSequence(a0) {
	let curr = a0;
	let prev = [];
	while(prev.indexOf(curr) === -1) {
		prev.push(curr);
		let next = 0;

		while(curr > 0) {
			next += (curr % 10) ** 2;
			curr = Math.floor(curr / 10);
		}

		curr = next;
	}
	return prev.length + 1;
}

// const a0 = 16; // -> 9
const a0 =103; // -> 4

document.body.style.backgroundColor = "#61dafb";

const app = document.querySelector("#app");
app.style = `
	background-color: #f1f5f8;
	width: 50%;
	margin: 150px auto;
	text-align: center;
	border: 2px solid #000;
	border-radius: 7px;
	font-size: 36px;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const el = document.createElement("div");
el.textContent = squareDigitsSequence(a0);

app.append(el);