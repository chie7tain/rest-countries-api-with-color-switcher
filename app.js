
const darkModeBtn = document.querySelector(".dark-mode-switcher-button");
const mainContainer = document.querySelector(".main-container");
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".fa-search");
const backBtn = document.querySelector(".back-button");
const arrowIcon = document.querySelector(".fa-arrow-left");
const filterInput = document.querySelector(".filter-countries");
const nav = document.querySelector("nav");
const countriesTileDisplay = document.querySelector(".countries-tiles-display");
const ulTag = document.querySelector("ul");




//  TODO:IMPLEMENT STICKY NAV BAR FEATURE
const topOfNav = nav.offsetTop;
    const fixedNav =()=>{
      if(window.scrollY >= topOfNav){
        document.body.classList.add("fixed-nav");
      }else{
        document.body.classList.remove("fixed-nav");

      }
    }
    window.addEventListener("scroll",fixedNav);
  // TODO:IMPLEMENT FETCH FEATURE
  const restCountriesApiUrl = "https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;region;subregion;population;languages;flag;topLevelDomain;nativeName;borders";
  const fetchCountries = async (url)=>{
    let result = await fetch(url);
    let countries = await result.json();
    // console.log(countries);
    countries = countries.map(country =>{
      let {name,population,region,capital,subregion,topLevelDomain,currencies,languages,flag,borders} = country;
      const [currency] = currencies
      const {name:currencyName} = currency;
      languages = languages.map(language =>{
        const {name} = language;
        return {name}
      })

      return {name,population,region,capital,subregion,topLevelDomain,currencyName,languages,flag,borders};
    })
    // console.log(countries)
    return countries;
  }
 // TODO:IMPLEMENT DISPLAY COUNTRIES FEATURE
    class UI {
      static displayCountries =(countries)=>{
        let countryTile = "";
        countries.forEach(country =>{
          countryTile += `
            <div class="country-tile toggle-dark-mode" data-region="${country.region}">
              <div class="country-flag-image-container">
              <img class="country-flag" src=${country.flag} alt="image of a ${country.name}'s flag">
              </div>
              <div class="country-details">
                <div class="country-name-container">
                  <h4 class="country-name">${country.name}</h4>
                </div>
              <div class="country-pop-reg-cap">
                <div class="population">
                Population: ${country.population}
                </div>
                <div class="region">
                  Region:${country.region}
                </div>
                <div class="capital">
                  Capital:${country.capital}
                </div>
              </div>
              </div>
            </div>
          `;
        })
        // countriesTileDisplay.innerHTML = countryTile;
      }
       // TODO:IMPLEMENT DARK MODE
 static toggleDarkMode = ()=>{
  const countryTiles = [...document.querySelectorAll(".country-tile")];
  const darkModeElements = [...document.querySelectorAll(".toggle-dark-mode")];
   //  this function would toggle the colors on the UI when it is called by clicking the dark mode button
  darkModeElements.forEach(elem =>{
    elem.classList.toggle("light-mode-elements");
  })
  countryTiles.forEach(tile =>{
    tile.classList.toggle("country-tile-box-shadow-dark-mode");
  })
  backBtn.classList.toggle("dark-mode-btn");
  searchIcon.classList.toggle("light-text");
// this line toggles a class called toggle on the dark mode button in order to swithc the innerHTML that contains the font awesome icon and text so as to give a more descriptive icon when the button is clicked by the user
  darkModeBtn.classList.toggle("toggle");
  if(darkModeBtn.classList.contains("toggle")){
    darkModeBtn.innerHTML = `<i class="far fa-moon"></i> Light Mode`
  }else{
    darkModeBtn.innerHTML = `<i class="fas fa-moon"> Dark Mode`
  }
 }
 //  TODO:IMPLEMENT PAGINATION FEATURE
//  static paginateCountries(){
    }

darkModeBtn.addEventListener("click",UI.toggleDarkMode);


 // TODO:IMPLEMENT SEARECH FEATURE
 // TODO:IMPLEMENT FILTER BY REGION FEATURE
 // TODO:IMPLEMENT BACK BUTTON FEATURE
 // TODO:IMPLEMENT COUNTRY DETAILS FEATURE
 // TODO:IMPLEMENT BORDER COUNTRIES FEATURE

//  TODO:addEventListener to window object so that the methods fun only when the UI is ready
const runMethods= ()=>{
  fetchCountries("./countries.json").then(countries => {
    UI.displayCountries(countries);
    UI.toggleDarkMode(countries);
    // UI.paginateCountries();
  })
}
document.addEventListener("DOMContentLoaded",runMethods);