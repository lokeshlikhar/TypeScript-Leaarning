"use strict";
const inputfield = document.getElementById("username"); //telling ts that it is htmlelement
const btn = document.getElementById("btn");
;
btn?.addEventListener("click", () => {
    console.log(inputfield.value);
});
