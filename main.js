let elsoSzamjegy = ""
let masodikSzamjegy = ""
let muveletJel = ""

const szamGombok = document.getElementsByClassName("szamok")
const muveletGombok = document.getElementsByClassName("muveletek")
const inputElem = document.getElementById("kijelzo")
const torlesElem = document.getElementById("torles")
const egyenloElem = document.getElementById("egyenlo")


szamGombok[0].addEventListener("click", szamraKatt)
szamGombok[1].addEventListener("click", szamraKatt)
szamGombok[2].addEventListener("click", szamraKatt)
szamGombok[3].addEventListener("click", szamraKatt)
szamGombok[4].addEventListener("click", szamraKatt)
szamGombok[5].addEventListener("click", szamraKatt)
szamGombok[6].addEventListener("click", szamraKatt)
szamGombok[7].addEventListener("click", szamraKatt)
szamGombok[8].addEventListener("click", szamraKatt)
szamGombok[9].addEventListener("click", szamraKatt)

function szamraKatt(event){
    console.log(event.target.textContent)
    inputElem.value += event.target.textContent
    
}

muveletGombok[0].addEventListener("click", muvelet)
muveletGombok[1].addEventListener("click", muvelet)
muveletGombok[2].addEventListener("click", muvelet)
muveletGombok[3].addEventListener("click", muvelet)

function muvelet(event){
    elsoSzamjegy = inputElem.value
    muveletJel = event.target.textContent
    inputElem.value = ""
    console.log(elsoSzamjegy)
    console.log(muveletJel)
}

torlesElem.addEventListener("click", torles)
function torles() {
    inputElem.value = ""
    elsoSzamjegy = ""
    masodikSzamjegy = ""
    muveletJel = ""
}

egyenloElem.addEventListener("click", szamolas)
function szamolas() {
    let eredmeny = 0
    masodikSzamjegy = inputElem.value
    if (muveletJel === "+") {
        eredmeny = Number(elsoSzamjegy) + Number(masodikSzamjegy)
    }
    if (muveletJel === "-") {
        eredmeny = Number(elsoSzamjegy) - Number(masodikSzamjegy)
    }
    if (muveletJel === "*") {
        eredmeny = Number(elsoSzamjegy) * Number(masodikSzamjegy)
    }
    if (muveletJel === "/") {
        if (masodikSzamjegy == "0") {
            eredmeny = "Hiba! Nullával való osztás!"
        } else {
            eredmeny = Number(elsoSzamjegy) / Number(masodikSzamjegy)
        }

    }
    inputElem.value = eredmeny
    inputElem.textContent = eredmeny
    console.log(eredmeny)
}