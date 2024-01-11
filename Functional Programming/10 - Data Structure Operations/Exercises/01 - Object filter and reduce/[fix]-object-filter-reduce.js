"use strict";

var nums = {
	first: [3,5,2,4,9,1,12,3],
	second: [5,7,7,9,10,4,2],
	third: [1,1,3,2]
};

var filteredNums = filterObj(function(list){
	return isOdd(listSum(list));
},nums);


var filteredNumsProducts = mapObj(function(list){
	return listProduct(list);
},filteredNums);


console.log(reduceObj(function(acc,v){
	return acc + v;
},0,filteredNumsProducts)); // 38886

// ************************************

function mapObj(mapperFn,o) {
	var newObj = {};
	var keys = Object.keys(o);
	for (let key of keys) {
		newObj[key] = mapperFn( o[key] );
	}
	return newObj;
}

function filterObj(predicateFn,o) {
	let result = {};
	for (let key of Object.keys(o)) {
		if (predicateFn(o[key])) {
			result[key] = o[key];
		}
	}
	return result;
}

function reduceObj(reducerFn,initialValue,o) {
	let result = initialValue;
	for (let key of Object.keys(o)) {
		result = reducerFn(result, o[key]);
	}
	return result;
}

// ************************************

function isOdd(v) { return v % 2 == 1; }
function sum(x,y) { return x + y; }
function mult(x,y) { return x * y; }
function listSum(list) { return list.reduce(sum,0); }
function listProduct(list) { return list.reduce(mult,1); }
