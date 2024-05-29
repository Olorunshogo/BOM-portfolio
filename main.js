function currentAge() {
    const yearOfBirth = 1999;
    const presentDate = new Date();    
    const presentDay = presentDate.getUTCDate();
    const presentMonth = presentDate.getUTCMonth() + 1; // months from 1-12
    const presentYear = presentDate.getUTCFullYear();

    const age = [(presentYear - yearOfBirth) - 1];    
    const currentAge = (presentYear - yearOfBirth);    

    if (presentMonth == 1) {
        document.getElementById("currentAge").innerHTML = age;
        } else if (presentMonth == 2) {
            document.getElementById("currentAge").innerHTML = age;
        } else if (presentMonth == 3) {
            document.getElementById("currentAge").innerHTML = age;
        } else if (presentMonth == 4) {
            document.getElementById("currentAge").innerHTML = age;
        } else if (presentMonth == 5) {
            document.getElementById("currentAge").innerHTML = age;
        } else if (presentMonth == 6) {
            document.getElementById("currentAge").innerHTML = age;
        } else if (presentDay == 12 && presentMonth == 7) {
            document.getElementById("currentAge").innerHTML = currentAge;
        } else if (presentMonth == 8) {
            document.getElementById("currentAge").innerHTML = currentAge;
        } else if (presentMonth == 9) {
            document.getElementById("currentAge").innerHTML = currentAge;
        } else if (presentMonth == 10) {
            document.getElementById("currentAge").innerHTML = currentAge;
        } else if (presentMonth == 11) {
            document.getElementById("currentAge").innerHTML = currentAge;
        } else {
            document.getElementById("currentAge").innerHTML = currentAge;
    }
}
currentAge();