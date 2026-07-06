const homePage = document.getElementById("homePage");

const wizardPage = document.getElementById("wizardPage");

const startButton = document.getElementById("startButton");

const progressBar = document.getElementById("progressBar");

startButton.onclick = function(){

homePage.classList.add("hidden");

wizardPage.classList.remove("hidden");

progressBar.style.width="14%";

}

document.getElementById("nextButton").onclick=function(){

alert("Pada Bagian 3 kita akan masuk ke Tema Cerita.");

}
