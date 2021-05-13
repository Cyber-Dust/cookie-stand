'use strict'

 let hours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ',"Daily Location Total: "];

 let objectNumber = 0;

function randomCookie(min, max) {
  return Math.floor(Math.random() * (max - min) + min);  
}

function Locations(name, min, max, avg) {

    this.name = name;
    this.min = min;
    this.max = max;

    this.avg = avg;
    this.hours = hours;
    objectNumber++;
    }

 Locations.prototype.getCookiesEachHour = function(){

   this.arrayCookie = [];
   this.numCookie = [];

   let total = 0;
   let currentCount = 0;

  for(let i=0; i<hours.length-1 ;i++){
    currentCount = Math.floor(randomCookie(this.min,this.max) * this.avg); 

    this.arrayCookie.push(`${hours[i]} ${currentCount} cookies`);

    total += currentCount;
    console.log(total);

    
 }
    this.arrayCookie.push(`Total: ${total} cookies`);

    this.numCookie.push(total);

 return this.arrayCookie;
}
let Seattle = new Locations("Seattle", 23, 65, 6.3);

let Tokyo = new Locations("Tokyo", 3, 24,1.2);

let Dubai = new Locations("Dubai",11,38,2.3);

let Paris = new Locations("Paris",20,38,2.3);

let Lima = new Locations("Lima",2,16,4.6);


let objectsArray = [Seattle, Tokyo, Dubai,  Paris, Lima];

Seattle.getCookiesEachHour();
Tokyo.getCookiesEachHour();
Dubai.getCookiesEachHour();
Paris.getCookiesEachHour();
Lima.getCookiesEachHour();



function makeCookieDiv(Locations){
  
  const div = document.getElementById('div');

  const createArticle = document.createElement('article');
    let store = Locations.name;
  createArticle.setAttribute("id", store);

  div.appendChild(createArticle);
  const h2 = document.createElement('h2');
  h2.textContent = Locations.name;
  createArticle.appendChild(h2);
}

// MAKE A TABLE DISPLAY




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

// function makeCookieLi(Locations){
//   let store = Locations.name;
//    const article = document.getElementById(store);
//   const ul = document.createElement("ul")
//   article.appendChild(ul);
//   for(let i = 0; i < Locations.arrayCookie.length; i++){
//     const li = document.createElement('li');
//     li.textContent = Locations.arrayCookie[i];
//     ul.appendChild(li);
//   }

// }

// TABLE FUNCTION EXAMPLE
// function addTable(Locations) {
//   let name = location.name;
//   const articleElem = document.getElementById(name);

//   const tableElem = document.createElement('table');
//   articleElem.appendChild(tableElem);

//   const trElem = document.createElement('tr');
//   tableElem.appendChild(trElem);

//   const tr2Elem = document.createElement('tr');
//   tableElem.appendChild(tr2Elem);

//   let th1Elem = document.createElement('th');
//   th1Elem.
// }

function tableHeader(){
  const table = document.getElementById('table');
  const th1 = document.createElement('th');
  const tr = document.createElement('tr');
  table.appendChild(tr);
  th1.textContent = "locations "
  tr.appendChild(th1);
  for (let i = 0; i < hours.length; i++){
    const th = document.createElement("th");
    th.textContent = hours[i];
    tr.appendChild(th);
  }
}

function tableBody(locations){
 const body = document.getElementById("table");

  const tr = document.getElementById("tr");
  body.appendChild(tr);
  const nameTd = document.createElement('td');
  nameTd.textContent = locations.name;
  tr.appendChild(nameTd);
  for (let j=0; j < locations.arrayCookie.length; j++ ){

    const td = document.createElement("td");
    td.textContent = locations.arrayCookie[j];
    tr.appendChild(td);

  }

}

function tableFooter(){
  const footer = document.getElementById("table");
  const tr = document.getElementById("tr");
   footer.appendChild(tr);
   const nameTd = document.createElement('td');
   nameTd.textContent = "Totals";
   footer.appendChild(nameTd);
   let totalFooter = 0;
   for (let j=0; j < hours.length-1; j++ ){

    const createTd = document.createElement('td');

    for(let k=0; k < objectNumber; k++){
      totalFooter += objectsArray[k].numCookie[j];
    }

     createTd.textContent = (totalFooter);

    footer.appendChild(createTd);
    totalFooter = 0;
  }

  const totalTd = document.createElement('td')
  for(let k=o; k < objectsNumber; k++){
    totalFooter += objectsArray[k].numCookie[objectsArray[k].numCookie.length-1];
  }
  totalTd.textContent = (totalFooter);
  footer.appendChild(totalTd);
  
}




tableHeader();
tableBody(objectsArray[0]);
tableBody(objectsArray[1]);
tableBody(objectsArray[2]);
tableBody(objectsArray[3]);
tableBody(objectsArray[4]);
tableFooter();


// makeCookieH2(seattle)
// makeCookieLi(seattle)
// makeCookieH2(Tokyo)
// makeCookieLi(Tokyo)
// makeCookieH2(Dubai)
// makeCookieLi(Dubai)
// makeCookieH2(Paris)
// makeCookieLi(Paris)
// makeCookieH2(Lima)
// makeCookieLi(Lima)
