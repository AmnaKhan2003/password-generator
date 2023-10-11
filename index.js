const pwEl=document.getElementById('pw');
const copyEl=document.getElementById('copy');
const lenEl=document.getElementById('len');
const upperEl=document.getElementById('upper');
const lowerEl=document.getElementById('lower');
const numberEl=document.getElementById('number');
const symbolEl=document.getElementById('symbol');
const generateEl=document.getElementById('generate');
const paraEl=document.getElementById('para');

const upperLetters='ABCDEFGIJKLMNOPQRSTUVWXYZ';
const lowerLetters='abcdefgijklmnopqrstuvwxyz';
const numbers='0123456789';
const symbols='!@#$%^&*()_+=';

function getLowercase(){
    return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
}

function getUppercase(){
        return upperLetters[Math.floor(Math.random()*upperLetters.length)];
}

function getNumber(){
    return numbers[Math.floor(Math.random()*numbers.length)];
}

function getSymbol(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}

function generatePassword(){
    let password='';
    paraEl.innerText='';
    pwEl.innerText='';
    const len=lenEl.value;
    if(len<4 || len>20){
        paraEl.innerHTML="Password having length greater than 20 or less than 4 can't be generated!!!!";
    }
    else{
    for(let i=0;i<len;i++){
        const x=generateX();
        console.log(x);
        password+=x;
    }
    pwEl.innerHTML=password;
}

}
function generateX(){
    const arr=[];
    if(upperEl.checked){
        arr.push(getUppercase());
    }
    if(lowerEl.checked){
        arr.push(getLowercase());
    }
    if(symbolEl.checked){
        arr.push(getSymbol());
    }
    if(numberEl.checked){
        arr.push(getNumber());
    }
    if(arr.length===0){
        return '';
    }
    return arr[Math.floor(Math.random()*arr.length)];
}
generateEl.addEventListener('click',generatePassword);
