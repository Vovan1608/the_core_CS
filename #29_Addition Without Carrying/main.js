"use strict";

/* 
A little boy is studying arithmetic. He has just learned how to add two integers, written one below another, column by column. But he always forgets about the important part - carrying.

Given two integers, your task is to find the result which the little boy will get.

Note: The boy had learned from this site, so feel free to check it out too if you are not familiar with column addition.

Example
For param1 = 456 and param2 = 1734, the output should be
additionWithoutCarrying(param1, param2) = 1180.

   456
  1734
+ ____
  1180
The boy performs the following operations from right to left:
6 + 4 = 10 but he forgets about carrying the 1 and just writes down the 0 in the last column
5 + 3 = 8
4 + 7 = 11 but he forgets about the leading 1 and just writes down 1 under 4 and 7.
There is no digit in the first number corresponding to the leading digit of the second one, so the boy imagines that 0 is written before 456. Thus, he gets 0 + 1 = 1.
*/

function additionWithoutCarrying(param1, param2) {
	const arrParam1 = getArrFromNum(param1);
	const arrParam2 = getArrFromNum(param2);
	const size = arrParam1.length > arrParam2.length ? arrParam1.length : arrParam2.length

	for (let i = )
	return getArrFromNum(param1);
}

const getArrFromNum = (num) => [...String(num)].map(el => Number(el));

const param1 = 456;
const param2 = 1734;

document.body.style.backgroundColor = "#61dafb";

const app = document.querySelector("#app");
app.style = `
	background-color: #f1f5f8;
	width: 50%;
	margin: 100px auto;
	text-align: center;
	font-size: 36px;
	border: 2px solid #222;
	border-radius: 7px;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const el = document.createElement("div");
el.innerText = additionWithoutCarrying(param1, param2);

app.append(el);