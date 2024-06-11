class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "English", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])
let france = new Country("France", "French", "Bonjour le monde!", ["blue", "white", "red"])
let germany = new Country("Germany", "German", "Hallo Welt!", ["black", "red", "yellow"])






function SwitchCountry() {
    let input = "USA";
    let country;
    
    
 
   
    if (input === "USA") {
        //set country to usa 
        country = usa;
            
        
       
    }
    else if (input === "Mexico") {
        country = mexico;
        OL = Spanish;
        
      
    }
    else if (input === "France") {
        country = france;
        
       
      
    }
    else if (input === "Germany") {
        country = germany;
        
       
      
    }
    else if (input === "Algeria") {
        country = algeria;
        
    }

let CName = document.getElementById("CountryName");
country =  CountryList.value;
CName.innerText = country;

let Clang = document.getElementById("OfficialLanguage");

if(CountryList.value.toLowerCase() === "usa")
    {Clang.innerText = usa.lang;}
else if(CountryList.value.toLowerCase() === "mexico")
    {Clang.innerText = mexico.lang;}
else if(CountryList.value.toLowerCase() === "france")
    {Clang.innerText = france.lang;}
else if(CountryList.value.toLowerCase() === "germany")
    {Clang.innerText = germany.lang;}
else if(CountryList.value.toLowerCase() === "algeria")
    {Clang.innerText = algeria.lang;}


let Greet = document.getElementById("HelloWorld");

if(CountryList.value.toLowerCase() === "usa")
    {Greet.innerText = usa.greeting;}
else if(CountryList.value.toLowerCase() === "mexico")
    {Greet.innerText = mexico.greeting;}
else if(CountryList.value.toLowerCase() === "france")
    {Greet.innerText = france.greeting;}
else if(CountryList.value.toLowerCase() === "germany")
    {Greet.innerText = germany.greeting;}
else if(CountryList.value.toLowerCase() === "algeria")
    {Greet.innerText = algeria.greeting;}












let Clr1 = document.getElementById("Color1");
if(CountryList.value.toLowerCase() === "usa")
{document.body.style.backgroundColor = usa.colors[0]}
if(CountryList.value.toLowerCase() === "mexico")
    {document.body.style.backgroundColor = mexico.colors[0]}
if(CountryList.value.toLowerCase() === "france")
    {document.body.style.backgroundColor = france.colors[0]}
if(CountryList.value.toLowerCase() === "germany")
    {document.body.style.backgroundColor = germany.colors[0]}
if(CountryList.value.toLowerCase() === "algeria")
    {document.body.style.backgroundColor = algeria.colors[0]}
    
let Clr2 = document.getElementById("Color2");
if(CountryList.value.toLowerCase() === "usa")
{Clr2.style.backgroundColor = usa.colors[1]}
if(CountryList.value.toLowerCase() === "mexico")
    {Clr2.style.backgroundColor = mexico.colors[1]}
if(CountryList.value.toLowerCase() === "france")
    {Clr2.style.backgroundColor = france.colors[1]}
if(CountryList.value.toLowerCase() === "germany")
    {Clr2.style.backgroundColor = germany.colors[1]}
if(CountryList.value.toLowerCase() === "algeria")
    {Clr2.style.backgroundColor = algeria.colors[1]}

let Clr3 = document.getElementById("Color3");
if(CountryList.value.toLowerCase() === "usa")
{Clr3.style.backgroundColor = usa.colors[2]}
if(CountryList.value.toLowerCase() === "mexico")
    {Clr3.style.backgroundColor = mexico.colors[2]}
if(CountryList.value.toLowerCase() === "france")
    {Clr3.style.backgroundColor = france.colors[2]}
if(CountryList.value.toLowerCase() === "germany")
    {Clr3.style.backgroundColor = germany.colors[2]}
if(CountryList.value.toLowerCase() === "algeria")
    {Clr3.style.backgroundColor = algeria.colors[2]}








}

