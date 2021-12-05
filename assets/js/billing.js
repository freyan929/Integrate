const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const address = document.getElementById("address");
const state = document.getElementById("state");
const city = document.getElementById("city");
const zipCode = document.getElementById("zip-code");
const submitBtn = document.getElementById("submit-button");
const error = document.getElementById("error");
const main = document.getElementById("hideOnClick");
const targetFooter = document.getElementById("target");

submitBtn.addEventListener("click", validateForm);

function validateForm() {
  let f = fname.value;
  let l = lname.value;
  let a = address.value;
  let s = state.value;
  let c = city.value;
  let z = zipCode.value;
  if (f == "" || l == "" || a == "" || s == "" || c == "" || z == "") {
    error.innerHTML = "Please fill out the whole form and submit again!";
  } else {
    //hide old "page"
    for (let i = 0; i < main.children.length; i++) {
      main.children[i].classList.add("hidden");
    }
    //Show confirmation "page"
    const h = document.createElement("H1"); 
    let ht = document.createTextNode("Thanks!"); 
    h.appendChild(ht); 
    const p = document.createElement("p"); 
    let pt = document.createTextNode("Your card will be confirmed in 1-3 business days. In the meantime, help us personalize your trip by answering some questions."); 
    p.appendChild(pt); 
    const btn = document.createElement("button"); 
    btn.setAttribute('class', 'btn');  
    btn.setAttribute('id', 'continue-btn');  
    btn.textContent = "LET'S GO!";
 
    targetFooter.parentNode.insertBefore(h, target);
    targetFooter.parentNode.insertBefore(p, target);
    targetFooter.parentNode.insertBefore(btn, target);

  }
}