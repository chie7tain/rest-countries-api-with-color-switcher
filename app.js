const fetchCountries = async ()=>{
  let result = await fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;region;subregion;population;languages;flag;topLevelDomain;nativeName;borders");
  let data = await result.json();
  console.log(data);
}
// fetchCountries();