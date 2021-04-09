"use strict";

/* 
Given two strings a and b, both consisting only of lowercase English letters, your task is to calculate how many strings equal to a can be constructed using only letters from the string b? Each letter can be used only once and in one string only.
Example
For a = "abc" and b = "abccba", the output should be stringsConstruction(a, b) = 2.
We can construct 2 strings a = "abc" using only letters from the string b.
For a = "ab" and b = "abcbcb", the output should be stringsConstruction(a, b) = 1.
*/

function stringsConstruction(a, b) {
	return a;
}

const a = "abc";
const b = "abccba";

document.body.style.backgroundColor = "#61dafb";

const app = document.getElementById("app");
app.style = `
	background-color: #f1f5f8;
	font-size: 36px;
	
`;