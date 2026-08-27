/*
const passwordBox = document.getElementById("Password");
const lenght = 8;


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></ -= ";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

*/

const passwordBox = document.getElementById("Password");
const length = 8;

// Generate ranges programmatically (ASCII codes)
const generateRange = (start, end) =>
    String.fromCharCode(...Array.from({ length: end - start + 1 }, (_, i) => start + i));

const upperCase = generateRange(65, 90);  // A-Z
const lowerCase = generateRange(97, 122); // a-z
const number = generateRange(48, 57);  // 0-9
const symbol = "!@#$%^&*()_+-=[]{}|;:,.<>?/";

const getRandomChar = (str) => str[Math.floor(Math.random() * str.length)];

function createPassword() {
    // Ensure at least one character from each set
    const required = [
        getRandomChar(upperCase),
        getRandomChar(lowerCase),
        getRandomChar(number),
        getRandomChar(symbol)
    ];

    const allChars = upperCase + lowerCase + number + symbol;

    // Fill remaining length
    while (required.length < length) {
        required.push(getRandomChar(allChars));
    }

    // Shuffle so required characters aren't always at the beginning
    passwordBox.value = required.sort(() => Math.random() - 0.5).join("");
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}