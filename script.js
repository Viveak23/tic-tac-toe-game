let button = document.querySelector("#btn");
let curmode = "light";

button.addEventListener("click" , () =>{
    if(curmode == "light"){
        curmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        curmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
console.log(curmode);
})
