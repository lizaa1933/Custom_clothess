const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let name = prompt("Ваше имя?", "")
let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusLeft < 35 && cactusLeft > 0 && dinoTop >= 140){
        alert(name + ', ' + 'еще раз?');
    }
}, 5)




document.addEventListener("keydown", function(event){
    dinojump();
})



function dinojump(){
    if (dino.classList != "dinojump"){
        dino.classList.add("dinojump")
    }
    setTimeout(function(){
        dino.classList.remove("dinojump")
    }, 500)
}

//btn.addEventListener("click", function(event){
//    showMessage();
//})

//function showMessage(){
 //   alert("123");
 //   console.log("Всё супер")
//}

// if (iHaveABread == true){
//     makeASandwich();
// }
// else{
//     makeATea();
// }