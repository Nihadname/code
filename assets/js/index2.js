let name=document.querySelector(".name");
let surname=document.querySelector(".surname");
let age=document.querySelector(".age");
let button=document.querySelector(".extra");
let table=document.querySelector(".table")
let counter=0;
button.addEventListener("click",function(){
    let valueOfName=name.value;
    let ValueOfSurname=surname.value;
    let ValueOfAge=Number(age.value);
if(valueOfName===""||ValueOfSurname===""){
    alert("hamsi doldurun");
    return;
}
    if(!isNaN(valueOfName)||!isNaN(ValueOfSurname)){
        alert("string daxil edin soz ");
        return;
    }
    if(isNaN(ValueOfAge)){
        alert("reqem daxil edin");
        return;
    }
let newValue=document.createElement("tr");
let TdAdding=document.createElement("td");
let TdAdding2=document.createElement("td");
let TdAdding3=document.createElement("td");
TdAdding.textContent=valueOfName;
TdAdding2.textContent=ValueOfSurname;
TdAdding3.textContent=ValueOfAge;
counter++;
newValue.style.backgroundColor=counter%2==0?"white":"gray";
newValue.append(TdAdding,TdAdding2,TdAdding3);
table.append(newValue);



})