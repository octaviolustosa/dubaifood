// box 1
showBoxOne = window.document.getElementById("box-1");
var boxOne = function() {
    var y = window.scrollY;
    if (y >= 375) {
        showBoxOne.className = "box-1 show"
    } else {
        showBoxOne.className = "box-1 hide"
    }
};
window.addEventListener("scroll", boxOne);

// box 2
showBoxTwo = window.document.getElementById("box-2");
var boxTwo = function() {
    var y = window.scrollY;
    if (y >= 575) {
        showBoxTwo.className = "box-2 show-left"
    } else {
        showBoxTwo.className = "box-2 hide-left"
    }
};
window.addEventListener("scroll", boxTwo);

// box 3
showBoxThree = window.document.getElementById("box-3");
var boxThree = function() {
    var y = window.scrollY;
    if (y >= 775) {
        showBoxThree.className = "box-3 show"
    } else {
        showBoxThree.className = "box-3 hide"
    }
};
window.addEventListener("scroll", boxThree);

// box 7
showBoxSeven = window.document.getElementById("box-7");
var boxSeven = function() {
    var y = window.scrollY;
    if (y >= 975) {
        showBoxSeven.className = "box-7 show-left"
    } else {
        showBoxSeven.className = "box-7 hide-left"
    }
};
window.addEventListener("scroll", boxSeven);


// h-box 
hBox = document.getElementById('h-box');
var hShow = function() {
    var y = window.scrollY;
    if (y >= 2750) {
        hBox.className = 'h-box show'
    } else {
        hBox.className = 'h-box h-hide'
    }
};
window.addEventListener("scroll", hShow);