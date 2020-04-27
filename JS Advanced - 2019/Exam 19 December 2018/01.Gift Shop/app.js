function solution() {
  //note - success solution is add button not added addEventListener, because not accept test 2,3,4!!!
  //only initial!!!
  let button = document.querySelector("button");

  let typeToy = document.querySelector("#toyType");
  let priceToy = document.querySelector("#toyPrice");
  let descriptionToy = document.querySelector("#toyDescription");
  
  if(typeToy.value && Number(priceToy.value) && descriptionToy.value) {
    let divGift = document.createElement("div");
    divGift.className = "gift";

    let img = document.createElement("img");
    img.src = "gift.png";
    divGift.appendChild(img);

    let h2 = document.createElement("h2");
    h2.textContent = typeToy.value;
    divGift.appendChild(h2);

    let p = document.createElement("p");
    p.textContent = descriptionToy.value;
    divGift.appendChild(p);

    let button = document.createElement("button");
    button.textContent = `Buy it for $${priceToy.value}`;
    button.addEventListener("click", buyGift);
    divGift.appendChild(button);

    document.getElementById("christmasGiftShop").appendChild(divGift);

    document.querySelector("#toyType").value = "";
    document.querySelector("#toyPrice").value = "";
    document.querySelector("#toyDescription").value = "";
  }
  
  function buyGift(e) {
    this.parentNode.remove();
  }
}
