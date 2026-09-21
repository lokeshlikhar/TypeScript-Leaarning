const inputfield = document.getElementById("username") as HTMLInputElement; //telling ts that it is htmlelement
const btn = document.getElementById("btn") as HTMLButtonElement;;
btn?.addEventListener("click" , ()=>{
    console.log(inputfield.value);
})