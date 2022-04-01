var x=document.querySelector("form").addEventListener("submit",signupfun)
x=window.location("C:\Users\kavan\Desktop\klyan.S\sign  in .html")
function signupfun(){
event.preventDefault();
var userData=JSON.parse(localStorage.getItem("storageData"))||[];
signupobj={
    names:document.querySelector("#names").value,
    email:document.querySelector("#email").value,
    jsselector:document.querySelector("#jsselector").value,
    number:document.querySelector("#number").value,
}
userData.push(signupobj)
localStorage.setItem(("storageData"),JSON.stringify(userData))
document.querySelector("#names").value="";
document.querySelector("#email").value="";
document.querySelector("#jsselector").value="";
document.querySelector("#number").value="";
}