// fade sec 1
// showContent = document.getElementById('box-1');
// var fade = function() {
//     var y = window.scrollY;
//     if (y >= 750) {
//         showContent.className = 'box-1 show'
//     } else {
//         showContent.className = 'box-1 hide'
//     }
// };

// window.addEventListener("scroll", fade);

// fadeleft = document.getElementById('info-sec-1');
// var fdleft = function() {
//     var y = window.scrollY;
//     if (y >= 300) {
//         fadeleft.className = 'info-sec-1 show'
//     } else {
//         fadeleft.className = 'info-sec-1 hideLeft'
//     }
// };
// window.addEventListener("scroll", fdleft);



// box 1
showBoxOne = window.document.getElementById("box-1");

var boxOne = function() {
    var y = window.scrollY;
    if (y >= 450) {
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
    if (y >= 700) {
        showBoxThree.className = "box-3 show"
    } else {
        showBoxThree.className = "box-3 hide"
    }
};
window.addEventListener("scroll", boxThree);





