"use strict";

/* 
Given two strings a and b, both consisting only of lowercase English letters, your task is to calculate how many strings equal to a can be constructed using only letters from the string b? Each letter can be used only once and in one string only.
Example
For a = "abc" and b = "abccba", the output should be stringsConstruction(a, b) = 2.
We can construct 2 strings a = "abc" using only letters from the string b.
For a = "ab" and b = "abcbcb", the output should be stringsConstruction(a, b) = 1.
*/

function stringsConstruction(a, b) {
	let count = 0;
  let finding = true;
  let pos;
  b = [...b];
  while (finding) {
    for (let i of a) {
      pos = b.indexOf(i);
      if (pos >= 0) {
        b.splice(pos, 1);
      } else {
        finding = false;
        break;
      }
    }

    if (finding) {
      count++;
    }
  }

  return count;
}

// const a = "abc";
// const b = "abccba"; // -> 2

const a = "hnccv";
const b = "hncvohcjhdfnhonxddcocjncchnvohchnjohcvnhjdhihsn"; // -> 3

document.body.style.backgroundColor = "#61dafb";

const app = document.getElementById("app");
app.style = `
	background-color: #f1f5f8;
	font-size: 36px;
	width: 50%;
	text-align: center;
	margin: 200px auto;
	border: 2px solid #222;
	border-radius: 7px;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const el = document.createElement("div");
el.textContent = stringsConstruction(a, b);

app.append(el);