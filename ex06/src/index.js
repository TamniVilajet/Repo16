const firstName = (firstName) => {
    return firstName.toUpperCase();
}

const lastName = (lastName) => {
    return lastName.toLowerCase()
}
console.log(firstName("ermin"));
console.log(lastName("ERMIN"));

exports.firstName = firstName;
exports.lastName = lastName;