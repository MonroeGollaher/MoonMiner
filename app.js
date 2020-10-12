let rupees = 0; 
let collectionInterval = 0
let rpsValue = 0 
let autoUpdate = 0 
let priceIncrement = 15
let autoPriceIncrement = 200

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
        price: 500, 
        quantity: 0, 
        multiplier: 20
    }, 

    spinAttack: {
        name: "Spin Attack", 
        price: 1000, 
        quantity: 0, 
        multiplier: 50
    }
}

// AUTO UPGRADE INTERVAL

function startInterval(){
    collectionInterval = setInterval(useAutoUpgrades, 3000)
}

function useAutoUpgrades(){
    for (const key in autoUpgrades) {
        if (autoUpgrades.hasOwnProperty(key)) {
            const element = autoUpgrades[key];
            rupees += (element.multiplier * element.quantity)
        }
    }
    update()
}

// MAIN CLICKING / RUPEE MINING

function mine(){
    rupees++
    useClickables()
    update()
    updateRPS()
    rupeesPerSecond()
}

// UPDATES STATS

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

    let hammerCostElem = document.getElementById("hammerCost")
    hammerCostElem.innerText = clickUpgrades.megatonHammer.price

    let bombCostElem = document.getElementById("bombCost")
    bombCostElem.innerText = autoUpgrades.bomb.price

    let swordCostElem = document.getElementById("spinCost")
    swordCostElem.innerText = autoUpgrades.spinAttack.price
}

function updateRPS(){
    let rpsElem = document.getElementById("rupeesRate")
    rpsElem.innerText = rpsValue
}

function rupeesPerSecond(){
    rpsValue = rupees / 30
}

// USING INVENTORY ITEMS

function useClickables(){
    rupees += clickUpgrades.megatonHammer.multiplier * clickUpgrades.megatonHammer.quantity
    rupees += clickUpgrades.bigGoronSword.multiplier * clickUpgrades.bigGoronSword.quantity

    rupees += autoUpgrades.bomb.multiplier * autoUpgrades.bomb.quantity
    rupees += autoUpgrades.spinAttack.multiplier * autoUpgrades.spinAttack.quantity
    update()
}

// BUYING CLICK UPGRADES

function buyHammer(key){
    if(rupees >= clickUpgrades[key].price){
        clickUpgrades[key].quantity++
        rupees -= clickUpgrades[key].price
        clickUpgrades[key].price += priceIncrement
    }

    console.log(clickUpgrades[key].quantity)
    update()
}

function buySword(key){
    if(rupees >= clickUpgrades[key].price){
        clickUpgrades[key].quantity++
        rupees -= clickUpgrades[key].price
        clickUpgrades[key].price += priceIncrement
    }

    console.log(clickUpgrades[key].price)
    update()
}

// BUYING AUTO UPGRADES

function autoBomb(key){
    if(rupees >= autoUpgrades[key].price){
        autoUpgrades[key].quantity++
        rupees -= autoUpgrades[key].price
        autoUpgrades[key].price += autoPriceIncrement
    }
    update()
}

function autoSpin(key){
    if(rupees >= autoUpgrades[key].price){
        autoUpgrades[key].quantity++
        rupees -= autoUpgrades[key].price
        autoUpgrades[key].price += autoPriceIncrement
    }
    update()
}

update()
startInterval()

