'use strict'
// --------------------------- Global Variables ---------------------------//

let hours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ',"Daily Location Total: "];

let objectNumber = 0;

const allLocations = [];

const formElem = document.getElementById('addSalmonForm');

function handleSubmit(event) {
  //Do this for every form
  event.preventDefault();
  let name = event.target.name.value;
  let min = event.target.min.value;
  let max = event.target.max.value;
  let avg = event.target.avg.value;


  let newLocations = new Locations(name, min, max, avg);
  console.log(newLocations);
  allLocations.push(newLocations);

  newLocations.getCookiesEachHour();
  renderAllLocations();
  event.target.reset();

}
function renderAllLocations() {
  const table = document.getElementById('table');
  table.innerHTML = '';
  tableHeader();
  for (let i = 0; i < allLocations.length; i++) {
    tableBody(allLocations[i]);
  }
  tableFooter();
}



// --------------------------- Constructor Functions ---------------------------//

function Locations(name, min, max, avg) {

  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hours = hours;
  objectNumber++;
  allLocations.push(this);
  }

// --------------------------- Prototype Methods ---------------------------//


Locations.prototype.getCookiesEachHour = function(){

  this.arrayCookie = [];
  this.numCookie = [];

  let total = 0;
  let currentCount = 0;

 for(let i=0; i<hours.length-1 ;i++){
   currentCount = Math.floor(randomCookie(this.min,this.max) * this.avg); 

   this.arrayCookie.push(` ${currentCount} cookies`);
   this.numCookie.push(currentCount);

   total += currentCount;
   console.log(total);

   
}
   this.arrayCookie.push(`Total: ${total} cookies`);

   this.numCookie.push(total);

return this.arrayCookie;
}

formElem.addEventListener('submit', handleSubmit);

// --------------------------- Regular Functions ---------------------------//

function randomCookie(min, max) {
  return Math.floor(Math.random() * (max - min) + min);  
} 

function tableHeader(){
  const table = document.getElementById('table');
  const th1 = document.createElement('th');
  const tr = document.createElement('tr');
  table.appendChild(tr);
  th1.textContent = " "
  tr.appendChild(th1);
  for (let i = 0; i < hours.length; i++){
    const th = document.createElement("th");
    th.textContent = hours[i];
    tr.appendChild(th);
  }
}

function tableBody(locations){
 const body = document.getElementById("table");

  const tr = document.createElement("tr");
  body.appendChild(tr);
  const nameTd = document.createElement('td');
  nameTd.textContent = locations.name;
  tr.appendChild(nameTd);
  for(let j = 0; j < locations.arrayCookie.length; j++ ){

    const td = document.createElement("td");
    td.textContent = locations.arrayCookie[j];
    tr.appendChild(td);

  }

}

function tableFooter(){
  const footer = document.getElementById("table");
  const tr = document.createElement("tr");
  footer.appendChild(tr);
  const nameTd = document.createElement('td');
  nameTd.textContent = "Totals";
  footer.appendChild(nameTd);
  let totalFooter = 0;
  for (let j=0; j < hours.length-1; j++ ){

    const createTd = document.createElement('td');

    for(let k=0; k < objectNumber; k++){
      totalFooter += allLocations[k].numCookie[j];
    }

     createTd.textContent = (totalFooter);

     footer.appendChild(createTd);
     totalFooter = 0;
  }

  const totalTd = document.createElement('td')
  for(let k=0; k < objectNumber; k++){
    totalFooter += allLocations[k].numCookie[allLocations[k].numCookie.length-1];
  }
  totalTd.textContent = (totalFooter);
  footer.appendChild(totalTd);
  
}


// --------------------------- All Listeners ---------------------------//



// --------------------------- Object Instances ---------------------------//

let seattle = new Locations("Seattle", 23, 65, 6.3);

let Tokyo = new Locations("Tokyo", 3, 24,1.2);

let Dubai = new Locations("Dubai",11,38,2.3);

let Paris = new Locations("Paris",20,38,2.3);

let Lima = new Locations("Lima",2,16,4.6);

//

let objectsArray = [seattle, Tokyo, Dubai,  Paris, Lima];

seattle.getCookiesEachHour();
Tokyo.getCookiesEachHour();
Dubai.getCookiesEachHour();
Paris.getCookiesEachHour();
Lima.getCookiesEachHour();


// --------------------------- Call the function that put data on the page ---------------------------//

tableHeader();
tableBody(objectsArray[0]);
tableBody(objectsArray[1]);
tableBody(objectsArray[2]);
tableBody(objectsArray[3]);
tableBody(objectsArray[4]);
tableFooter();

