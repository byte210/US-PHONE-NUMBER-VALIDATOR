function telephoneCheck(str) {
    return /^[1]?\s?\([0-9]{3}?\)\s?[0-9]{3}?\-?\s?[0-9]{4}?$|^[1]?\s?[0-9]{3}\-?\s?[0-9]{3}?\-?\s?[0-9]{4}?$/gm.test(str);
}

//test
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("-1 456 789 4444"))

//^[1]?\s?\([0-9]{3}?\)\s?[0-9]{3}?\-?\s?[0-9]{4}?$|^[1]?\s?[0-9]{3}\-?\s?[0-9]{3}?\-?\s?[0-9]{4}?$