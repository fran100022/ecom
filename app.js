
function changeName (){
    const storeName = document.getElementById("storename")
    storeName.innerHTML = "My Store"
}

changeName()

function changeBg (){
    document.body.style.backgroundColor = "AliceBlue"
}
changeBg()


function changeAddress (){
    const storeAddress = document.getElementById("address")
    storeAddress.innerHTML = "My New Address"
}
changeAddress()

function addClass() {
    const addingClass = document.querySelectorAll(".product a")
    addingClass.forEach(function(a){
        a.classList.add('item-link')
    })
}
addClass()

function changeVisibility() {
    const change = document.querySelectorAll(".product a")
    change.forEach(function(a){
        a.classList.remove('hidden')
    })
}
changeVisibility()

function changePriceColor() {
    const changeColor = document.querySelectorAll(".product .price")
    changeColor.forEach(function(price){
        price.style.color = "red"
    })
}
changePriceColor()