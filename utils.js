function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
function celciusToFahrenheit(ceilcius) {
    return (ceilcius * 9) / 5 + 32;
}
module.exports = {
    generateRandomNumber,
    celciusToFahrenheit 
    
};  