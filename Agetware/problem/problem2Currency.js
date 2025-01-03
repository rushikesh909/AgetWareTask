function formatIndianNumber(number) {

    let [integerPart, decimalPart] = number.toString().split(".");
    let lastThreeDigits = integerPart.slice(-3);
    let otherDigits = integerPart.slice(0, -3);
    if (otherDigits !== "") {
        otherDigits = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
    }
    let formattedInteger = otherDigits + (otherDigits ? "," : "") + lastThreeDigits;
    return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}
let number = prompt("Enter the number");
console.log(formatIndianNumber(number));