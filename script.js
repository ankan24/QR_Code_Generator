let image = document.querySelector("#image");
let size = document.querySelector("#size");
let input = document.querySelector("#input");
let submit = document.querySelector("#submit");

submit.addEventListener("click", genQR);

function genQR() {

   // const gapi = "https://chart.googleapis.com/chart?cht=qr&chs=";
   const gapi = "https://api.qrserver.com/v1/create-qr-code/?size=";

   let inputValue = input.value;
   let sizeValue = size.value;

   if (inputValue != "" && sizeValue == "100") {
      image.src = gapi + "100x100" + "&data=" + encodeURIComponent(inputValue);
   } 
   else if (inputValue != "" && sizeValue == "150") {
      image.src = gapi + "150x150" + "&data=" + encodeURIComponent(inputValue);
   }
   else if (inputValue != "" && sizeValue == "200") {
      image.src = gapi + "200x200" + "&data=" + encodeURIComponent(inputValue);
   } 
   else if (inputValue != "" && sizeValue == "250") {
      image.src = gapi + "250x250" + "&data=" + encodeURIComponent(inputValue);
   } 
   else if (inputValue != "" && sizeValue == "300") {
      image.src = gapi + "300x300" + "&data=" + encodeURIComponent(inputValue);
   } 
   else {
      alert("Please enter valid input and select a size!");
   }
}
