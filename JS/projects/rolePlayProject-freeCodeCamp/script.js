let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const txtIni="Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above."

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const weapons = [
    { name: 'stick', power: 5 },
    { name: 'dagger', power: 30 },
    { name: 'claw hammer', power: 50 },
    { name: 'sword', power: 100 }
];
const monsters = [
    {
        name: "slime",
        level: 2,
        health: 15
    },
    {
        name: "fanged beast",
        level: 8,
        health: 60
    },
    {
        name: "dragon",
        level: 20,
        health: 300
    }
]
const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
    },
    {
        name: "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You enter the cave. You see some monsters."
    },
    {
        name: "fight",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],
        text: "You are fighting a monster."
    },
    {
        name: "kill monster",
        "button text": ["Go to town square", "Go to town square", "Go to town square"],
        "button functions": [goTown, goTown, goTown],
        text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
    },
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You die. &#x2620;"
    },
    { 
        name: "win", 
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
        "button functions": [restart, restart, restart], 
        text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;" 
    },
    {
        name: "easter egg",
        "button text": ["2", "8", "Go to town square?"],
        "button functions": [pickTwo, pickEight, goTown],
        text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
    }
];
// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
    limpiarTexto(text);
    monsterStats.style.display = "none";
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerHTML = location.text;
}

function goTown() {
    update(locations[0]);
}

function goStore() {
    update(locations[1]);
}

function goCave() {
    update(locations[2]);
}

function buyHealth() {
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    } else {
        colaEscribir("You do not have enough gold to buy health.", text);
    }
}

function buyWeapon() {
    if (currentWeapon < weapons.length - 1) {
        if (gold >= 30) {
            gold -= 30;
            currentWeapon++;
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name;
            escritura=("You now have a " + newWeapon + ".", text);
            inventory.push(newWeapon);
            colaEscribir("In your inventory you have: " + inventory, text);
        } else {
            colaEscribir("You do not have enough gold to buy a weapon.", text);
        }
    } else {
        colaEscribir("You already have the most powerful weapon!", text);
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;
    }
}

function sellWeapon() {
    if (inventory.length > 1) {
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        colaEscribir("You sold a " + currentWeapon + ".", text);
        colaEscribir("In your inventory you have: " + inventory, text);
    } else {
        text.innerText = "Don't sell your only weapon!";
    }
}

function fightSlime() {
    fighting = 0;
    goFight();
}

function fightBeast() {
    fighting = 1;
    goFight();
}

function fightDragon() {
    fighting = 2;
    goFight();
}

function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block";
    monsterName.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
}

function attack() {  
    colaEscribir("The " + monsters[fighting].name + " attacks.", text);
    colaEscribir("You attack it with your " + weapons[currentWeapon].name + ".", text);
    health -= getMonsterAttackValue(monsters[fighting].level);
    if (isMonsterHit()) {
        monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;    
    } else {
        colaEscribir("You miss.", text);
    }
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if (health <= 0) {
        lose();
    } else if (monsterHealth <= 0) {
        if (fighting === 2) {
            winGame();
        } else {
            defeatMonster();
        }
    }
    if (Math.random() <= .1 && inventory.length !== 1) {
        colaEscribir("Your " + inventory.pop() + " breaks.", text);
        currentWeapon--;
    }
}

function getMonsterAttackValue(level) {
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(hit);
    return hit > 0 ? hit : 0;
}

function isMonsterHit() {
    return Math.random() > .2 || health < 20;
}

function dodge() {
    colaEscribir("You dodge the attack from the " + monsters[fighting].name, text);
}

function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7);
    xp += monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[4]);
}

function lose() {
    update(locations[5]);
}

function winGame() {
    update(locations[6]);
}

function restart() {
    xp = 0;
    health = 100;
    gold = 50;
    currentWeapon = 0;
    inventory = ["stick"];
    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;
    goTown();
}

function easterEgg() {
    update(locations[7]);
}

function pickTwo() {
    pick(2);
}

function pickEight() {
    pick(8);
}

function pick(guess) {
    const numbers = [];
    while (numbers.length < 10) {
        numbers.push(Math.floor(Math.random() * 11));
    }
    colaEscribir("You picked " + guess + ". Here are the random numbers:\n", text);
    for (let i = 0; i < 10; i++) {
        colaEscribir(numbers[i] + "\n", text);
    }
    if (numbers.includes(guess)) {
        colaEscribir("Right! You win 20 gold!", text);
        gold += 20;
        goldText.innerText = gold;
    } else {
        colaEscribir("Wrong! You lose 10 health!", text);
        health -= 10;
        healthText.innerText = health;
        if (health <= 0) {
            lose();
        }
    }
}
let cola=[]
let escribiendo=false
let activo=null

function colaEscribir(txt, element, delay=50) {
    limpiarTexto(element)
    cola.push({texto: txt, element, delay})
    procesarCola()
}

function procesarCola(){
    if(escribiendo||cola.length===0) return
    escribiendo=true
    const {texto, element, delay}=cola.shift()
    element.textContent = "";
    let i = 0;
    activo=setInterval(() => {
        if (i < texto.length) {
            element.textContent += texto.charAt(i);
            i++;
        } else {
            clearInterval(activo);
            escribiendo=false
            procesarCola()
        }
    }, delay);
}
function limpiarTexto(element){
    if(activo) clearInterval(activo)
    escribiendo=false
    cola=[]
    element.textContent = "";
}

window.onload = () => {
    const txtSpan=document.querySelector("#text");
    colaEscribir(txtIni, txtSpan);
}