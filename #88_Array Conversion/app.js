"use strict";

/* 
Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.
After the algorithm has finished, there will be a single element left in the array. Return that element.

Example

For inputArray = [1, 2, 3, 4, 5, 6, 7, 8], the output should be
arrayConversion(inputArray) = 186.

We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.
*/

function arrayConversion(inputArray) {
	let flag = true;
	let res = [...inputArray];

	while (res.length !== 1) {
		if (flag) {
			res = getPairsSum(res);
			flag = false;
		} else {
			res = getPairsMul(res);
			flag = true;
		}
	}

	return res;
}

const getPairsSum = arr => {
	let resArr = [];

	for (let i = 0; i < arr.length; i += 2) {
		resArr.push(arr[i] + arr[i + 1]);
	}

	return resArr;
}

const getPairsMul = arr => {
	let resArr = [];

	for (let i = 0; i < arr.length; i += 2) {
		resArr.push(arr[i] * arr[i + 1]);
	}

	return resArr;
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8]; // -> 186

document.body.style.backgroundColor = "#61dafb";

const app = document.getElementById("app");
app.style = `
	width: 50%;
	font-size: 36px;
	text-align: center;
	margin: 200px auto;
	color: #222;
	border: 2px solid #222;
	background-color: #f1f5f8;
	border-radius: 7px;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const el = document.createElement("div");
el.textContent = arrayConversion(inputArray);

app.append(el);