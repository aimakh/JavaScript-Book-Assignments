1.
/* Show an alert box on click on a link. */
function alertbox(){
    alert("Hello World!")
}


2. /* Display some Mobile images in browser. On click on an 
image Show the message in alert to user */
function showAlertMessage(){
    alert("Thanks for purchasing from us")
}
3.
function removeRow(button){
   let deleted = button.parentNode.parentNode
   deleted.parentNode.removeChild(deleted)
}
4.
function changeAImage(change) {
    let image1_2 = document.getElementById("images");
    image1_2.src = change;
  }

  5.
  let counter = document.getElementById("showCounter")
  let showThecounter = 0

  function isToUpdateTheCounter(){
    counter.textContent = showThecounter
  }
  function  decrement(){
   if (showThecounter > 0) {
    showThecounter--
    isToUpdateTheCounter()
   }
  }
  
  function  increment(){
    showThecounter++
    isToUpdateTheCounter()
  }
  