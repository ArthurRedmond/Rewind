function getValue() {
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let reversedString = reverseString(userString);

    displayString(reversedString);
}

function reverseString(userString) {
    let reversedString = [];

    for (let i = userString.length - 1; i >= 0; i--) {
        reversedString += userString[i];
    }
  
    return reversedString;

}

function displayString(reversedString) {
    document.getElementById("message").innerHTML = `Your string reveresed is: ${reversedString}`;

    document.getElementById("alert").classList.remove("invisible");

}