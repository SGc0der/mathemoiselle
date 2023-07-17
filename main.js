function newPage(){
    window.location="index2.html";
}
player1Name=document.getElementById("name1").innerHTML;
player2Name=document.getElementById("name1").innerHTML;
function saveNames(){
    localStorage.setItem("Name 1: ",player1Name);
    localStorage.setItem("Name 2: ",player2Name);
}