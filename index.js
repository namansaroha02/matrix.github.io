
// <=====================NAVBAR===================>
var noOfElem=document.querySelectorAll("li").length;
const list=document.querySelectorAll(".nav-li");

function activeLink(){
    list.forEach((item)=>
        item.classList.remove("active"));
    this.classList.add("active");
}
list.forEach((item)=>
    item.addEventListener("click",activeLink));


// <=====================SOCIAL=====================>
document.querySelector(".message").addEventListener("click",function(){
    document.querySelector(".msgarea").classList.add("clicked-msg");
})

document.querySelector(".mail").addEventListener("click",function(){
    document.querySelector(".mailarea").classList.add("clicked-mail");
    // this.classList.add("clicked-mail");
    // this.classList.remove("mailarea");
})