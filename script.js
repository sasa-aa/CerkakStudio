/* ===================================================== CERKAK STUDIO -
script.js Logika utama aplikasi
===================================================== */

const API_URL = “PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL”;

let current = 0;

const home = document.getElementById(“home”); const wizard =
document.getElementById(“wizard”); const bar =
document.getElementById(“bar”); const judul =
document.getElementById(“judul”);

const steps = document.querySelectorAll(“.step”); const inputs =
document.querySelectorAll(“input,select,textarea”);

/* ————————- Inisialisasi ————————- */

window.onload = () => { tampilkan(); loadData(); };

/* ————————- Mulai ————————- */

function mulai(){ home.classList.add(“hidden”);
wizard.classList.remove(“hidden”); }

/* ————————- Wizard ————————- */

function tampilkan(){

    steps.forEach(step => step.classList.remove("active"));

    steps[current].classList.add("active");

    let persen=((current+1)/steps.length)*100;

    bar.style.width=persen+"%";

    judul.innerHTML="Langkah "+(current+1)+" dari "+steps.length;

}

/* ————————- Next ————————- */

function nextStep(){

    if(!validasi()) return;

    if(current<steps.length-1){

        current++;

        tampilkan();

    }

}

/* ————————- Prev ————————- */

function prevStep(){

    if(current>0){

        current--;

        tampilkan();

    }

}

/* ————————- Validasi ————————- */

function validasi(){

    const aktif=steps[current];

    const field=aktif.querySelectorAll("input,select,textarea");

    for(let i=0;i<field.length;i++){

        if(field[i].value.trim()==""){

            alert("Silakan lengkapi semua data.");

            field[i].focus();

            return false;

        }

    }

    return true;

}

/* ————————- Auto Save ————————- */

inputs.forEach(input=>{

    input.addEventListener("input",saveData);

});

function saveData(){

    const data={};

    inputs.forEach(input=>{

        data[input.id]=input.value;

    });

    localStorage.setItem(

        "cerkakStudio",

        JSON.stringify(data)

    );

}

/* ————————- Load ————————- */

function loadData(){

    const data=JSON.parse(

        localStorage.getItem("cerkakStudio") || "{}"

    );

    inputs.forEach(input=>{

        if(data[input.id]){

            input.value=data[input.id];

        }

    });

}

/* ————————- Reset ————————- */

function resetData(){

    if(confirm("Hapus semua data?")){

        localStorage.removeItem("cerkakStudio");

        location.reload();

    }

}

/* ————————- Kirim ke Spreadsheet ————————- */

async function kirimData(){

    if(!validasi()) return;

    const data={};

    inputs.forEach(input=>{

        data[input.id]=input.value;

    });

    try{

        const response=await fetch(API_URL,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(data)

        });

        const hasil=await response.json();

        if(hasil.status=="success"){

            alert("Cerkak berhasil dikirim.");

            localStorage.removeItem("cerkakStudio");

            location.reload();

        }else{

            alert("Pengiriman gagal.");

        }

    }catch(error){

        console.log(error);

        alert("Tidak dapat terhubung ke server.");

    }

}

/* ————————- Ringkasan (opsional) ————————- */

function tampilRingkasan(){

    console.log("Nama :",document.getElementById("nama").value);

    console.log("Tema :",document.getElementById("tema").value);

}
