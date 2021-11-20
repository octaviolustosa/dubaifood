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


showBoxOne = window.document.getElementById("box-1");

var boxOne = function() {
    var y = window.scrollY;
    if (y >= 700) {
        showBoxOne.className = "box-1 show"
    } else {
        showBoxOne.className = "box-1 hide"
    }
};

window.addEventListener("scroll", boxOne);





