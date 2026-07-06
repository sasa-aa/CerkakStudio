script.js (ringkasan)

let current=0; const steps=document.querySelectorAll(‘.step’); const
bar=document.getElementById(‘bar’); const
judul=document.getElementById(‘judul’); const
inputs=document.querySelectorAll(‘input,select,textarea’); const
API_URL=‘PASTE_WEB_APP_URL’;

window.onload=()=>{tampilkan();loadData();}

function
mulai(){home.classList.add(‘hidden’);wizard.classList.remove(‘hidden’);}
function tampilkan(){ steps.forEach(s=>s.classList.remove(‘active’));
steps[current].classList.add(‘active’);
bar.style.width=((current+1)/7*100)+‘%’;
judul.textContent=Langkah ${current+1} dari 7; } function
nextStep(){if(current<6){current++;tampilkan();}else{kirimData();}}
function prevStep(){if(current>0){current–;tampilkan();}}

inputs.forEach(i=>i.addEventListener(‘input’,saveData)); function
saveData(){ let d={}; inputs.forEach(i=>d[i.id]=i.value);
localStorage.setItem(‘cerkakStudio’,JSON.stringify(d)); } function
loadData(){ let
d=JSON.parse(localStorage.getItem(‘cerkakStudio’)||‘{}’);
inputs.forEach(i=>{if(d[i.id]) i.value=d[i.id];}); } async function
kirimData(){ let d={}; inputs.forEach(i=>d[i.id]=i.value);
alert(‘Hubungkan fetch() ke Google Apps Script Web App.’); }
