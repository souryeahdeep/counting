const decrease=document.querySelector("#decrease");
const increase=document.querySelector("#increase");
const counter=document.querySelector(".num");
let i=0;

decrease.addEventListener('click', function(){
    i--;
    counter.textContent=i;
    if(i<0)
        counter.style.color="red";
    if(i==0)
        counter.style.color="black";
})
increase.addEventListener('click', function(){
    i++;
    counter.textContent=i;
    if(i>0)
        counter.style.color="green";
    if(i==0)
        counter.style.color="black";
})
reset.addEventListener('click', function(){
    i=0;

    counter.textContent=i;
    if(i==0)
        counter.style.color="black";
})