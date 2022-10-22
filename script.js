import Api from "./api.js"  //./ - указатель на текущею папку

let user = document.cookie;
console.log('+',user);
if(!user){
    user = prompt("Пользователь не наиден, укажите имя пользователья","LuckyIAM");
}else{
    user = user.split("=")[1]
}
document.cookie = `user = ${user}`

const api = new Api('LuckyIAM');
const container = document.querySelector(".container");
const btn = document.querySelector(".dashboard").firstElementChild;
const popupList = document.querySelectorAll(".popup");
const popBox = document.querySelector(".popup-wrapper");

api.getCats()
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.message === "ok") {
            data.data.forEach(cat => {
                createCard(cat, container, Array.from(popupList));
            });
        } else {
            showPopup(Array.from(popupList), "info", data.message);
        }
        // showPopup(Array.from(popupList), "info", data.message);
    });


popupList.forEach(p => {
    p.firstElementChild.addEventListener("click", e => {
        p.classList.remove("active");
        popBox.classList.remove("active");
    });
});

btn.addEventListener("click", e => {
    showPopup(Array.from(popupList), "add");
});

popBox.addEventListener("click", function(e) {
    if (e.target === this) {
        popBox.classList.remove("active");
        popupList.forEach(p => {
            if (p.classList.contains("active")) {
                p.classList.remove("active");
            }
        })
    }
});