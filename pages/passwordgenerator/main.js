const uppurcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "~!@#$%^&*()_+{}[]\|<>?=";
const password_el = document.querySelector('#password');
const lenght_el = document.querySelector('#lenght');
const upper_el = document.querySelector('#uppurcase');
const lower_el = document.querySelector('#lowercase');
const number_el = document.querySelector('#number');
const symbol_el = document.querySelector('#symbol');

const allChars = uppurcase + lowercase + number + symbol;

function createPassword(){
    let password = "";
    let lenght_pas = lenght_el.value;
    let chars = "";

    chars += upper_el.checked ? uppurcase : "";
    chars += lower_el.checked ? lowercase : "";
    chars += number_el.checked ? number : "";
    chars += symbol_el.checked ? symbol : "";

    for (let i = 1; i <= lenght_pas; i++){
        let rand = Math.floor(Math.random() * chars.length);
        password += chars.substring(rand,rand + 1);
    }
    password_el.value = password;
}

async function copyPass(){
    if (navigator. clipboard){
        await navigator.clipboard.writeText(password_el.value);

        alert("copied password to clipboard")
    }
}