"use strict";

/* 
A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane. Its center (the intersection point of its diagonals) coincides with the point (0, 0), but the sides of the rectangle are not parallel to the axes; instead, they are forming 45 degree angles with the axes.

How many points with integer coordinates are located inside the given rectangle (including on its sides)?

Example

For a = 6 and b = 4, the output should be
rectangleRotation(a, b) = 23.

The following picture illustrates the example, and the 23 points are marked green.
*/

function rectangleRotation(a, b) {
	let pt = 0;
	let radius = Math.pow(a /2 , 2) + Math.pow(b / 2, 2);
	radius = Math.ceil(Math.pow(radius, 0.5));

	let degree = 45;
	let radians = degree * Math.PI / 180;

	for (let i = -radius; i <= radius + 1; i++) {

		for (let j = -radius; j <= radius + 1; j++) {
			let x = i * Math.cos(radians) - j * Math.sin(radians);
			let y = i * Math.sin(radians) + j * Math.cos(radians);
			if (-a / 2 <= x && x <= a / 2 && -b / 2 <= y && y <= b / 2 ) {
				pt += 1;
			}
		}
	}

	return pt;

	// let pointsA = Math.floor(Math.sqrt(a * a / 2)),
  //     pointsB = Math.floor(Math.sqrt(b * b / 2));
  // return (pointsA * pointsB + Math.floor((pointsA + pointsB) / 2)) * 2 + 1;
}

const a = 6;
const b = 4;

document.body.style.backgroundColor = "#61dafb";

const el = document.createElement("div");
el.textContent = rectangleRotation(a, b);

const app = document.getElementById("app");
app.style = `
	background-color: #f1f5f8;
	font-size: 36px;
	text-align: center;
	margin: 100px auto;
	width: 50%;
	border: 2px solid #222;
	border-radius: 7px;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

app.append(el);