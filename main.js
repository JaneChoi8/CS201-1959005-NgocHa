//https://fakestoreapi.herokuapp.com/products
let tar = document.querySelector(".products");
let more = document.querySelector(".more");
document.addEventListener("DOMContentLoaded", ()=>{
  console.log("loaded");
  getData(6);
  more.addEventListener("click", function(){
    getData(20);
  });
})

function getData(max) {
  let params = `?limit=${max}`
  let url = "https://fakestoreapi.herokuapp.com/products" + params;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function(){
    if(this.status == 200){
    let result = JSON.parse(this.responseText);
    console.log(result);
    showData(result, tar);
    };
  }
  xhr.send();
}

function showData(prod, tar) {
  let output = "";
  prod.forEach((item, i) => {
    output += `
      <div class="col-md-3">
      <a href="#">
        <img src="${item.image}" class="card-img">
          <h6>${item.title}</h6>
          <h4><i class="fas fa-dollar-sign"></i> ${item.price}</h4>
        </a>
      </div>
    `
  });
  tar.innerHTML = output;
}
