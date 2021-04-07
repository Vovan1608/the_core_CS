"use strict";

/* 
You work in a company that prints and publishes books. You are responsible for designing the page numbering mechanism in the printer. You know how many digits a printer can print with the leftover ink. Now you want to write a function to determine what the last page of the book is that you can number given the current page and numberOfDigits left. A page is considered numbered if it has the full number printed on it (e.g. if we are working with page 102 but have ink only for two digits then this page will not be considered numbered).

It's guaranteed that you can number the current page, and that you can't number the last one in the book.

Example

For current = 1 and numberOfDigits = 5, the output should be
pagesNumberingWithInk(current, numberOfDigits) = 5.

The following numbers will be printed: 1, 2, 3, 4, 5.

For current = 21 and numberOfDigits = 5, the output should be
pagesNumberingWithInk(current, numberOfDigits) = 22.

The following numbers will be printed: 21, 22.

For current = 8 and numberOfDigits = 4, the output should be
pagesNumberingWithInk(current, numberOfDigits) = 10.

The following numbers will be printed: 8, 9, 10.
*/

function pagesNumberingWithInk(current, numberOfDigits) {

}

const current = 8;
const numberOfDigits = 4;

document.body.style.backgroundColor = "#61dafb";

const app = document.querySelector("#app");
app.style = `
	background-color: #f1f5f8;
	width: 50%;
	font-size: 36px;
	text-align: center;
	margin: 100px auto;
	border: 2px solid #000;
	border-radius: 7px;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
;`

const el = document.createElement("div");
el.textContent = pagesNumberingWithInk(current, numberOfDigits);

app.append(el);