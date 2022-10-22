const createCard = (data, parent, arr) => {
    const card = document.createElement("div");
    card.className = "card";
    // card.setAttribute("data-id", data.id);
    card.dataset.id = data.id;

    const age = document.createElement("div");
    age.className = "age";
    age.innerText = data.age || "no";

    const rate = document.createElement("div");
    rate.className = "rate";
    rate.innerHTML = "<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>";

    const pic = document.createElement("div");
    pic.className = "pic";
    pic.style.backgroundImage = `url(${data.img_link || "images/с1.png"})`;

    const name = document.createElement("div");
    name.className = "name";
    name.innerText = data.name;

    card.append(pic, age, rate, name);
    card.addEventListener("click", function() {
        showPopup(arr, "card");
    });
    parent.append(card);
}

const showPopup = (list, type, content) => {
    let el = list.filter(el => el.dataset.type === type)[0];
    // switch (type) {
    //     case "card": 
    //     case "info":
    //     case "form":
    // }
    el.classList.add("active");
    el.parentElement.classList.add("active");
}

const addCat = e =>{
    e.preventDefault();
    let body = {}; //{name: 'Vasea', id: 1, ...}
    for(let i=0; i<e.target.elements.lenght; i++){
        let el = e.target.elements[i];
        console.log(el);
        if(el.name){
            body[el.name]= el.value
        }
    }
    console.log(body);
}