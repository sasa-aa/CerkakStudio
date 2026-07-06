let current = 0;

const steps =
document.querySelectorAll(".step");

const bar =
document.getElementById("bar");

const judul =
document.getElementById("judul");

function mulai(){

document
.getElementById("home")
.classList.add("hidden");

document
.getElementById("wizard")
.classList.remove("hidden");

}

function tampilkan(){

steps.forEach(step=>step.classList.remove("active"));

steps[current].classList.add("active");

let persen=((current+1)/7)*100;

bar.style.width=persen+"%";

judul.innerHTML=
"Langkah "+(current+1)+" dari 7";

}

function nextStep(){

if(current<6){

current++;

tampilkan();

}else{

alert("Data siap dikirim ke Spreadsheet.");

}

}

function prevStep(){

if(current>0){

current--;

tampilkan();

}

}

tampilkan();
