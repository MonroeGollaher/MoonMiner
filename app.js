let rupees = 0; 
let collectionInterval = 0

let clickUpgrades = {
    megatonHammer: {
        name: 'Megaton Hammer', 
        price: 15, 
        quantity: 0, 
        multiplier: 5
    }, 

    bigGoronSword: {
        name: 'Big Goron Sword', 
        price: 75, 
        quantity: 0, 
        multiplier: 10
    }
}

let autoUpgrades = {
    bomb: {
        name: 'Bomb', 
        price: 100, 
        quantity: 0, 
        multiplier: 20
    }, 

    spinAttack: {
        name: "Spin Attack", 
        price: 200, 
        quantity: 0, 
        multiplier: 50
    }
}

function startInterval(){
    collectionInterval = setInterval(collectAutoUpgrades, 3000)
}

// function collectAutoUpgrades {
//     rupees += 

// }

function mine(){
    rupees++

    console.log("Rupees:", rupees)
    useClickables()
    update()

}

function update(){
    let rupeeElem = document.getElementById("rupeeCount")
    rupeeElem.innerText = rupees

    let hammerElem = document.getElementById("hammerCount")
    hammerElem.innerText = clickUpgrades.megatonHammer.quantity

    let swordElem = document.getElementById("swordCount")
    swordElem.innerText = clickUpgrades.bigGoronSword.quantity

    let bombElem = document.getElementById("bombCount")
    bombElem.innerText = autoUpgrades.bomb.quantity

    let spinElem = document.getElementById("spinCount")
    spinElem.innerText = autoUpgrades.spinAttack.quantity

}

// USING INVENTORY ITEMS

function useClickables(key){
    rupees += clickUpgrades.megatonHammer.multiplier * clickUpgrades.megatonHammer.quantity

}

function useSword(){

}

function useBomb(){

}

function useSpin(){

}

// BUYING CLICK UPGRADES

function buyHammer(key){
    if(rupees >= clickUpgrades[key].price){
        clickUpgrades[key].quantity++
        rupees -= clickUpgrades[key].price
    }

    console.log(clickUpgrades[key].quantity)
    update()
}

function buySword(key){
    if(rupees >= clickUpgrades[key].price){
        clickUpgrades[key].quantity++
        rupees -= clickUpgrades[key].price
    }

    console.log(clickUpgrades[key].quantity)
    update()
}

// BUYING AUTO UPGRADES

function autoBomb(key){

}

function autoSpin(key){

}