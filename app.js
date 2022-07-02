const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.sort(() =>0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
let cardChosen = []
let cardChosenIds = []
const cardWon = []

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        console.log(card.img);
    }
}

createBoard()

function checkMatch(){

const cards = document.querySelectorAll('img')
console.log(cards);
    // if()
    if(cardChosen[0] == cardChosen[1]){
        alert('you found a match')
        cards[cardChosenIds[0]].setAttribute('src', 'images/white.png')
        cards[cardChosenIds[1]].setAttribute('src', 'images/white.png')
        cards[cardChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardChosenIds[1]].removeEventListener('click', flipCard)
        cardWon.push(cardChosen)
    }
    cardChosen = []
    cardChosenIds = []
}

function flipCard(){
    console.log(cardArray);
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if(cardChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}