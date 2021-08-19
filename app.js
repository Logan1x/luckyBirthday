const birthdayInput = document.getElementById("birthday-input");
const luckyNumberInput = document.getElementById("lucky-number-input");
const formSubmit = document.getElementById("form-submit");
const outputEl = document.getElementById("output-div");

formSubmit.addEventListener("submit", function handleFormSubmit(e) {
	// function to handle input submition
	e.preventDefault();
	const birthday = birthdayInput.value;
	const luckyNumber = luckyNumberInput.value;
	checkLuckyBirthday(birthday, luckyNumber);
});

function cleanDate(date) {
	// function to remove all non-numeric characters
	return date.replaceAll("-", "");
}

function checkLuckyBirthday(birthday, luckyNumber) {
	// function to check if birthday is lucky
	const birthdayClean = cleanDate(birthday);
	sum = 0;
	for (let i in birthdayClean) {
		sum = sum + Number(i);
	}

	isBirthdayLucky = sum % Number(luckyNumber);

	showOutput(isBirthdayLucky);
}

function showOutput(isBirthdayLucky) {
	// function to show output
	if (isBirthdayLucky) {
		outputEl.innerText = "Your Birthday is not lucky :(";
	} else {
		outputEl.innerText =
			"Consider Yourself Lucky, Not everyone has Birthday sum divided by Lucky Number";
	}
}
