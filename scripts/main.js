/* This is for setting the focus of the input button */
var $input = document.querySelectorAll("input");

$input.forEach(element => {
    element.addEventListener("focus", ()=> {
        element.classList.toggle("on-focus");
    })
});
$input.forEach(element => {
    element.addEventListener("blur", ()=> {
        element.classList.remove("on-focus");
    })
});


AOS.init({ duration: 500});


//Getting the element of the drop-down harmbugar
let $bar = document.querySelector(".fa");
let $burger_navigation = document.querySelector(".mobile-nav")

$bar.addEventListener("click", ()=> {
    $burger_navigation.classList.toggle("mobile-display");
    $bar.classList.toggle("display-fixed")
})

//Script to make navigation bar stay fixed after it's been called upon