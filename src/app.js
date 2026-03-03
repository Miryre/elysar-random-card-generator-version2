import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //inject card into dom/display card
//function 0 will render card onto screen
  function displayCard() {

    document.querySelector(".wrapper").innerHTML =
    `<div class="card mt-5">
            <div><span class="top-suit float-start ms-3"></span></div>
            <div class="value"></div>
            <div><span class="bottom-suit float-end me-3"></span></div>
          </div>`;

       getSuitAndValue();   
 }

 //function 1 -> hold arrays and draw a random suit & value

 function getSuitAndValue() {

  const suits = ['♠', '♥', '♣', '♦'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const randomSuitIndex = Math.floor(Math.random() * suits.length);
  const randomValueIndex = Math.floor(Math.random() * values.length);

  const drawnCard = {
    suit: suits[randomSuitIndex],
    value: values[randomValueIndex],
  };

  //pass the object to the next function
  assignCardToElements(drawnCard)
  
 }

 //function 2 queryselect class names and assign them suits and values

 function assignCardToElements (card = {suit: '♠', value: 'A' }) {

  const htmlTopSuitElement = document.querySelector('.top-suit');
  const htmlValueElement = document.querySelector(".value");
  const htmlBottomSuitElement = document.querySelector(".bottom-suit");

  htmlTopSuitElement.innerHTML = card.suit
  htmlValueElement.innerHTML = card.value
  htmlBottomSuitElement.innerHTML = card.suit

  const cardSuit ={
    topSuit: htmlTopSuitElement,
    bottomSuit: htmlBottomSuitElement,
  }

  //pass the suit elements to the next function to obtain their colors
  assignCardColor(cardSuit);
  

  //function 3 -> assign color as needed

  function assignCardColor (cardSuit) {

    if (cardSuit.topSuit.innerHTML === '♥' || cardSuit.topSuit.innerHTML === '♦' ) {
      cardSuit.topSuit.style.color = "red";
      cardSuit.bottomSuit.style.color ="red";
    }

  } 

 };
 
  displayCard();









}