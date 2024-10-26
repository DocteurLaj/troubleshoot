l1= document.querySelector('.l1');
l2= document.querySelector('.l2');
l3= document.querySelector('.l3');
lall = document.querySelector('.lAll');


l1.addEventListener("click", (event) =>{
    event.stopPropagation();
    l1.style.height = "150px";
    l1.children[1].classList.replace("fa-chevron-down", "fa-chevron-up");
})

l2.addEventListener("click", (event) =>{
    event.stopPropagation();
    l2.style.height = "150px";
    l2.children[1].classList.replace("fa-chevron-down", "fa-chevron-up");
})

l3.addEventListener("click", (event) =>{
    event.stopPropagation();
    l3.style.height = "150px";
    l3.children[1].classList.replace("fa-chevron-down", "fa-chevron-up");
})

document.body.addEventListener("click", () =>{
    l1.style.height = "auto";
    l1.children[1].classList.replace("fa-chevron-up", "fa-chevron-down");

    l2.style.height = "auto";
    l2.children[1].classList.replace("fa-chevron-up", "fa-chevron-down");

    l3.style.height = "auto";
    l3.children[1].classList.replace("fa-chevron-up", "fa-chevron-down");
})