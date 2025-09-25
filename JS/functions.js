
const cartIcon = document.querySelector(".header__img--cartIcon");
const cart = document.querySelector(".main__section--cartmain");
cartIcon.addEventListener("click", () => {
    cart.classList.toggle("show");
});

const closeCart = cart.firstElementChild;
const checkOut = document.querySelector(".chekcoutButton");
closeCart.addEventListener("click", () => {
    cart.classList.remove("show");
});
checkOut.addEventListener("click", () => {
    cart.classList.remove("show");
});

const menuIcon = document.querySelector(".header__img--menu");
const menu = document.querySelector (".main__section--menu");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("show");
});
const closeMenu = menu.firstElementChild;
closeMenu.addEventListener("click", () => {
    menu.classList.remove("show");})

const groupIcon = document.getElementById("groupReserveIcon");
const group = document.querySelector(".main__section--groupReserve")

groupIcon.addEventListener("click", () => {
    group.classList.toggle("show");
} )
const closeGroup = group.firstElementChild;
closeGroup.addEventListener("click", () => {
    group.classList.remove("show");})

const iconRemove = document.querySelectorAll(".main__cart--removeicon");  
const contador = document.getElementById("cartCont");   
const cartProducts = document.querySelector(".main__section--cart"); 
const addButton = document.querySelectorAll(".addCartButton");
const lastProd = document.querySelector(".last_cartProd");
//console.log(trashCan);
contador.innerText = cartProducts.childElementCount;
iconRemove.forEach (elem => { 
    elem.addEventListener("click", () => {
        const padre = elem.parentElement;
        padre.remove();
        contador.innerText = cartProducts.childElementCount;
    })
})


//picButton.addEventListener("click",() => {})
addButton.forEach (elem => {
    elem.addEventListener("click", () => {
        const padre = elem.parentElement;
        const pic = padre.firstElementChild;
        //console.log(pic.attributes);
        //console.log(pic.attributes[0]);

        const sourcePic = pic.getAttribute("src");
        
        
        const concepto = pic.nextElementSibling.innerText;
        const precio = padre.lastElementChild.innerText;
        const sourceTrashCan = iconRemove[0].getAttribute("src");
        const trashCan = document.createElement("img");
        trashCan.setAttribute("src", sourceTrashCan);
        trashCan.setAttribute("class", "remove main__cart--removeicon")
        console.log(sourceTrashCan);


        const newSlot = document.createElement("div");
        const newPic = document.createElement("img");
        newPic.setAttribute ("src", sourcePic);
        newPic.setAttribute("class" , "main__cart--mainpic");
        const newConcepto = document.createElement("p");
        newConcepto.innerText = concepto;
        const newPrecio = document.createElement("p");
        newPrecio.innerText = precio;
        newSlot.appendChild(newPic);
        newSlot.appendChild(newConcepto);
        newSlot.appendChild(newPrecio);
        newSlot.appendChild(trashCan);
        cartProducts.appendChild(newSlot);  
        contador.innerText = cartProducts.childElementCount;
        trashCan.addEventListener("click", () => {
            console.log("oprimi borrar")
            trashCan.parentElement.remove();
            contador.innerText = cartProducts.childElementCount;
        })
    } )
})

const groupsubmit = document.getElementById("main__form--submitBtn");
groupsubmit.addEventListener("click",() => {
    group.classList.remove("show");
    alert("Your information has been submited. We'll contact you shortly")
})
/*const picGallery = document.getElementById("main__section--galleryCont");
const picButton = document.querySelectorAll(".main__article--imgGallery");
picButton.forEach(elem => {
    elem.addEventListener("click", () => {
        picGallery.classList.toggle("main__article--slotbig");
    })
})
console.log(picButton);*/
contador.innerText = cartProducts.childElementCount;