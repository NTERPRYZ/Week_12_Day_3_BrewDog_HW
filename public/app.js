const app = function () {
  const url = "https://s3-eu-west-1.amazonaws.com/brewdogapi/beers.json"
  makeRequest(url,requestComplete)
}

const makeRequest = function (url, callback) {
  const request   = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}

const requestComplete = function () {
 if(this.status !== 200) return;

 const jsonString = this.responseText;
 const beers      = JSON.parse(jsonString);

 displayList(beers)
}


const displayList = function(beers){
  const div = document.getElementById("beers")

  beers.forEach(function(beer, index){
    const list     = document.createElement("p");
    const image    = document.createElement("img")
    const br       = document.createElement("br");

    list.innerText = (index+1) + ".  " + beer.name
    image.src      = beer.image_url

    div.appendChild(list)
    div.appendChild(image)
    div.appendChild(br);

  })

}

document.addEventListener('DOMContentLoaded', app);
