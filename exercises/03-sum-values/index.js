window.calculateSumListener = function calculateSumListener() {
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;

	//your code goes here
	var resultBox = document.querySelector("#resultNumber");
	let result = parseInt(stringA) + parseInt(stringB);
	resultBox.value = result;
};
