const colorpick = document.getElementById("colorpick");
const clear = document.querySelector(".fa-eraser");
const create = document.getElementById("create");
const container = document.querySelector(".container");
const olcum = document.querySelector(".olcum");
const colors = document.querySelector(".colors");
const secolors = document.querySelectorAll(".color, .silgi")
const p = document.getElementById("sec");

let color = null;
let draw = false;

clear.addEventListener("click", () => {
    color = "white"
})

colorpick.addEventListener("change", () => {
    color = colorpick.value;
}) 

secolors.forEach(c => {
  c.addEventListener("click", () => {
    secolors.forEach(c2 => c2.classList.remove("active"));
    if (c.classList.contains("silgi")) {
      color = "white";
    } else {
      color = colorpick.value;
    }
    c.classList.add("active");
  });
});


create.addEventListener("click", () => {
    const width = parseInt(document.getElementById("width").value);
    const height = parseInt(document.getElementById("height").value);
    if(!width || !height){
         alert("Lütfen ölçüleri giriniz.");
         return;
    }
    olcum.style.display = "none"; 
    container.style.display = "grid"; 
    colors.style.display = "flex";   
    p.style.display = "block";      
    container.innerHTML = "";
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${width}, 40px)`
    container.style.gridTemplateRows = `repeat(${height}, 40px)`
    for (let i = 0; i < width * height; i++) {
        const box = document.createElement("div");
        box.style.display = "flex"
        box.classList.add("box");
        container.appendChild(box);
    }
    const boxs = document.querySelectorAll(".box");
    boxs.forEach(box => {
    box.addEventListener("click", () => {
        if(color){
            box.style.backgroundColor = color;
            }
         })
    })

    boxs.forEach(box => {
        box.addEventListener("mouseover", () => {
            if(draw && color){
               box.style.backgroundColor = color;
         }
        })
        box.addEventListener("mousedown", () => {
            if(color){
                draw = true;
                box.style.backgroundColor = color;
            }
        })
        box.addEventListener("mouseup", () => {
            draw = false;
        })
    })

})




