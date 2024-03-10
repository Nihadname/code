// let FirstButton=document.getElementById("home-tab");
// let SecondButton=document.getElementById("profile-tab");
// let ThirdButton=document.getElementById("contact-tab");

// for (let index = 0; index < allbuttons.length; index++) {
// allbuttons[index].addEventListener("click", function(){
//     let dataId=allbuttons[index].getAttribute("data-id");
//     let div=document.getElementById(dataId);
//     console.log(div);
// })    
// }

let homeDiv = document.getElementById("Home"); // Correctly define the homeDiv
let profileDiv = document.getElementById("Profile");
let contactDiv = document.getElementById("Contact");
let allButtons = document.querySelectorAll("button");

allButtons.forEach(button => {
    button.addEventListener("click", function () {
        let dataId = button.getAttribute("data-id");
        let divToShow = document.getElementById(dataId);
        
        homeDiv.className = "d-none";
        profileDiv.className = "d-none";
        contactDiv.className = "d-none";
        divToShow.className = "d-block";
    });
});
