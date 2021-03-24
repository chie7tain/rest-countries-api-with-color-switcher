const fetchCountries = async ()=>{
  let result = await fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;region;subregion;population;languages;flag;topLevelDomain;nativeName;borders");
  let data = await result.json();
  console.log(data);
}
const darkModeBtn = document.querySelector(".dark-mode-switcher-button");
const mainContainer = document.querySelector(".main-container");
const header = document.querySelector("header");
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".fa-search");
const backBtn = document.querySelector(".back-button");
const arrowIcon = document.querySelector(".fa-arrow-left");
const filterInput = document.querySelector(".filter-countries");
const countryTiles = [...document.querySelectorAll(".country-tile")];
const darkModeElements = [...document.querySelectorAll(".toggle-dark-mode")];
const nav = document.querySelector("nav");


 // TODO:IMPLEMENT DARK MODE
 const toggleDarkMode = ()=>{
   //  this function would toggle the colors on the UI when it is called by clicking the dark mode button
  darkModeElements.forEach(elem =>{
    elem.classList.toggle("light-mode-elements");
  })
  countryTiles.forEach(tile =>{
    tile.classList.toggle("country-tile-box-shadow-dark-mode");
  })
  backBtn.classList.toggle("toggle");
  searchIcon.classList.toggle("light-text");
// this line toggles a class called toggle on the dark mode button in order to swithc the innerHTML that contains the font awesome icon and text so as to give a more descriptive icon when the button is clicked by the user
  darkModeBtn.classList.toggle("toggle");
  if(darkModeBtn.classList.contains("toggle")){
    darkModeBtn.innerHTML = `<i class="far fa-moon"></i> Light Mode`
  }else{
    darkModeBtn.innerHTML = `<i class="fas fa-moon"> Dark Mode`
  }
 }
  darkModeBtn.addEventListener("click",toggleDarkMode)
//  TODO:IMPLEMENT STICKY NAV BAR FEATURE

 // TODO:IMPLEMENT DISPLAY COUNTRIES FEATURE
 // TODO:IMPLEMENT SEARECH FEATURE
 // TODO:IMPLEMENT FILTER BY REGION FEATURE
 // TODO:IMPLEMENT BACK BUTTON FEATURE
 // TODO:IMPLEMENT COUNTRY DETAILS FEATURE
 // TODO:IMPLEMENT BORDER COUNTRIES FEATURE
