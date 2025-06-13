let boxes = document.querySelectorAll(".btn");
let resetbtn = document.querySelector(".btn3");
let  msgcontainer= document.querySelector(".msg.container");
let msg = document.querySelector(".msg");
let newgame = document.querySelector("#newgame");


let turn0 = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame =() =>{
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turn0){
            box.innerText = "O";
            turn0 =false;
        }
        else{
            box.innerText = "X"
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});
const disableboxes =() =>{
    boxes.forEach((box) =>{
        box.disabled = true;
    });
};


const enableboxes =() =>{
    boxes.forEach((box) =>{
        box.disabled = false;
        box.innerText = "";
    });
};


const showwinner = (winner) =>{
    msg.innerText = `congratulations ! winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner =() =>{
    for( let pattern of winpatterns){
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val !=""){
            if(pos1val == pos2val && pos2val == pos3val){
                showwinner(pos1val);
            }
        }
    }
}
newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);



