"use strict";

/* 
A ciphertext alphabet is obtained from the plaintext alphabet by means of rearranging some characters. For example "bacdef...xyz" will be a simple ciphertext alphabet where a and b are rearranged.

A substitution cipher is a method of encoding where each letter of the plaintext alphabet is replaced with the corresponding (i.e. having the same index) letter of some ciphertext alphabet.

Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) substitution ciphers.

Example

For string1 = "aacb" and string2 = "aabc", the output should be
isSubstitutionCipher(string1, string2) = true.

Any ciphertext alphabet that starts with acb... would make this transformation possible.

For string1 = "aa" and string2 = "bc", the output should be
isSubstitutionCipher(string1, string2) = false.
*/

function isSubstitutionCipher(string1, string2) {
	const string1Count = [];
	const string2Count = [];

	for (let i of string1) {
		string1Count.push([...string1].filter(el => el === i).length);
	}

	for (let i of string2) {
		string2Count.push([...string2].filter(el => el === i).length);
	}

	for (let i of string1Count) {
		if (
			string1Count.filter(el => el === string1Count[i]) !==
			string2Count.filter(el => el === string1Count[i])
		) return false;
	}

	return true;
}

const string1 = "aacb";
const string2 = "aabc";

document.body.style.backgroundColor = "#61dafb";

const app = document.getElementById("app");
app.style = `
	background-color: #f1f5f8;
	width: 50%;
	text-align: center;
	margin: 250px auto;
	font-size: 36px;
	border: 2px solid #222;
	border-radius: 7px;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const el = document.createElement("div");
el.textContent = isSubstitutionCipher(string1, string2);

app.append(el);