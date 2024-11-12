

let btn = document.getElementById("learnMore")
let two = document.getElementById("two")
let three = document.getElementById("three")

let divTwo = document.getElementsByClassName("two")
function onClick() {
    console.log(two.style.display)

    if (btn.innerText == "Learn Less") {
        console.log('ff')
        btn.innerText = "Learn More"
        two.style.display = 'none'
        three.style.display = 'none'
    } else {
        console.log('ff')
        two.style.display = 'grid'
        three.style.display = 'grid'
        btn.innerText = "Learn Less"
    }

}



let btn2 = document.getElementById("learnMore2")
let review1 = document.getElementById("review1")
let review2 = document.getElementById("review2")
let review3 = document.getElementById("review3")
let review4 = document.getElementById("review4")
let review5 = document.getElementById("review5")
let review6 = document.getElementById("review6")
let review7 = document.getElementById("review7")
let review8 = document.getElementById("review8")

function onClick8() {
    console.log('ff')


    if (btn2.innerText == "Learn Less") {
        console.log('ff')
        btn2.innerText = "Learn More"
        review1.style.display = 'none'
        review2.style.display = 'none'
        review3.style.display = 'none'
        review4.style.display = 'none'
        review5.style.display = 'none'
        review6.style.display = 'none'
        review7.style.display = 'none'
        review8.style.display = 'none'

    } else {
        console.log('ff')
        review1.style.display = 'block'
        review2.style.display = 'block'
        review3.style.display = 'block'
        review4.style.display = 'block'
        review5.style.display = 'block'
        review6.style.display = 'block'
        review7.style.display = 'block'
        review8.style.display = 'block'
 
        btn2.innerText = "Learn Less"
    }

}


let faq1 = document.getElementById('faq1-p');
let faq2 = document.getElementById('faq2-p');
let faq3 = document.getElementById('faq3-p');
let faq4 = document.getElementById('faq4-p');
let faq5 = document.getElementById('faq5-p');
let faq6 = document.getElementById('faq6-p');
let faq7 = document.getElementById('faq7-p');


function onClick1() {
    faq1.style.display = "block"
    faq2.style.display = "none"
    faq3.style.display = "none"
    faq4.style.display = "none"
    faq5.style.display = "none"
    faq6.style.display = "none"
    faq7.style.display = "none"
}

function onClick2() {
    faq1.style.display = "none"
    faq2.style.display = "block"
    faq3.style.display = "none"
    faq4.style.display = "none"
    faq5.style.display = "none"
    faq6.style.display = "none"
    faq7.style.display = "none"
}

function onClick3() {
    faq1.style.display = "none"
    faq2.style.display = "none"
    faq3.style.display = "block"
    faq4.style.display = "none"
    faq5.style.display = "none"
    faq6.style.display = "none"
    faq7.style.display = "none"
}

function onClick4() {
    faq1.style.display = "none"
    faq2.style.display = "none"
    faq3.style.display = "none"
    faq4.style.display = "block"
    faq5.style.display = "none"
    faq6.style.display = "none"
    faq7.style.display = "none"
}

function onClick5() {
    faq1.style.display = "none"
    faq2.style.display = "none"
    faq3.style.display = "none"
    faq4.style.display = "none"
    faq5.style.display = "block"
    faq6.style.display = "none"
    faq7.style.display = "none"
}

function onClick6() {
    faq1.style.display = "none"
    faq2.style.display = "none"
    faq3.style.display = "none"
    faq4.style.display = "none"
    faq5.style.display = "none"
    faq6.style.display = "block"
    faq7.style.display = "none"
}
function onClick7() {
    faq1.style.display = "none"
    faq2.style.display = "none"
    faq3.style.display = "none"
    faq4.style.display = "none"
    faq5.style.display = "none"
    faq6.style.display = "none"
    faq7.style.display = "block"
}
