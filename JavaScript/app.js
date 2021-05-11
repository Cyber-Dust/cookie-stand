'use strict'
 let hours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ',"Total: "];

function randomCookie(min, max) {
  return Math.floor(Math.random() * (max - min) + min);  
}
function Locations(name, min, max, hours){

    this.name = name;
    this.min = min;
    this.max = max;
    
 
    
    this.hours = hours;
    
  

    }
 Locations.prototype.getCookiesEachHour = function(){
   this.arrayCookie = [];
   let total = 0;
   let currentCount = 0;
  for(let i=0; i<hours.length-1 ;i++){
    currentCount = randomCookie(this.min,this.max); 
    this.arrayCookie.push(`${hours[i]} ${currentCount} cookies`);

    total += currentCount;
    console.log(total);

    
 }
    this.arrayCookie.push(`Total: ${total} cookies`);
 return this.arrayCookie;
}
let seattle = new Locations("Seattle", 23, 65, 6.3);

let Tokyo = new Locations("Tokyo", 3, 24,1.2);

let Dubai = new Locations("Dubai",11,38,2.3);

let Paris = new Locations("Paris",20,38,2.3);

let Lima = new Locations("Lima",2,16,4.6);

console.log(seattle.getCookiesEachHour());
console.log(Tokyo.getCookiesEachHour());
console.log(Dubai.getCookiesEachHour());
console.log(Paris.getCookiesEachHour());
console.log(Lima.getCookiesEachHour());

function makeCookieUl(Locations){
  
  const createUl = document.createElement('ul');
 
  
}


function makeCookieH2(Locations){

  const div = document.getElementById('div');

  const createArticle = document.createElement('article');
  let store = Locations.name;
  createArticle.setAttribute("id", store);


  div.appendChild(createArticle);
  const h2 = document.createElement('h2');
  h2.textContent = Locations.name;
  createArticle.appendChild(h2);
}

function makeCookieLi(Locations){
  let store = Locations.name;
   const article = document.getElementById(store);
  const ul = document.createElement("ul")
  article.appendChild(ul);
  for(let i = 0; i < Locations.arrayCookie.length; i++){
    const li = document.createElement('li');
    li.textContent = Locations.arrayCookie[i];
    ul.appendChild(li);
  }

}
makeCookieH2(seattle)
makeCookieLi(seattle)
makeCookieH2(Tokyo)
makeCookieLi(Tokyo)
makeCookieH2(Dubai)
makeCookieLi(Dubai)
makeCookieH2(Paris)
makeCookieLi(Paris)
makeCookieH2(Lima)
makeCookieLi(Lima)
