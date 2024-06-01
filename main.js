// DISPLAY CURRENT AGE
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

// =================== TOGGLE STYLE SWITCHER
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", function() {
    document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.toggle("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// =================== ALTERNATING THEME COLOURS
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(colour) {
    alternateStyles.forEach((style) => {
        if(colour === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}

// =================== THEME LIGHT AND DARK
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", function() {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.contains("dark");
})

// =================== TOGGLE MOON AND SUN ICON
window.addEventListener("load", function() {
    if(document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

// =================== HAMBURGER ICON DISPLAY SIDEBAR AND DISAPPEAR
const hamburger = document.querySelector(".hamburger-container");
hamburger.addEventListener("click", function() {
    document.querySelector(".sidebar").style.display = "flex";
    document.querySelector(".hamburger-container").style.display = "none";
})

// =================== TIMES ICON CLOSE SIDEBAR
const close = document.querySelector(".close");
close.addEventListener("click", function() {
    document.querySelector(".sidebar").style.display = "none";
    document.querySelector(".hamburger-container").style.display = "flex";
})


function addActiveClass() {
    var links = document.getElementsByTagName("a");

    // Remove the class from other links
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }

    // Add the class to the clicked link
    links.classList.add("active");
}


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    var formData = new FormData(this); // Get form data
    
    // Send form data to server (you can use Fetch API or XMLHttpRequest)
    fetch("/submit.php", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Success message
            console.log("Form submitted successfully!");
        } else {
            // Error message
            console.error("Error submitting form");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

