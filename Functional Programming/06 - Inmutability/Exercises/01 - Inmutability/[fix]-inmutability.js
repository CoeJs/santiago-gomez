"use strict";

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(newNum, currentNumsList) {
	if (!currentNumsList.includes(newNum)) {
		currentNumsList = [newNum, ...currentNumsList];
		currentNumsList.sort((a,b) => a - b);
	}
	return currentNumsList;
}


let luckyLotteryNumbers = [];
const NUM_COUNT = 6; 

while (luckyLotteryNumbers.length < NUM_COUNT) {
	luckyLotteryNumbers = pickNumber(
		lotteryNum(),
		Object.freeze(luckyLotteryNumbers)
	);
}

console.log(luckyLotteryNumbers);