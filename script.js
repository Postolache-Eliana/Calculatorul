
function addition(){
    const number1=document.getElementById("number1").value;
    const number2=document.getElementById("number2").value;
    result=number1+number2;
    document.getElementById("result").innerText=result;

}
function subtraction(){
    const number1=document.getElementById("number1").value;
    const number2=document.getElementById("number2").value;
    result=number1-number2;
    parseFloat(document.getElementById("result").innerText=result);

}
function multiplication(){
    const number1=document.getElementById("number1").value;
    const number2=document.getElementById("number2").value;
    result=number1*number2;
    parseFloat(document.getElementById("result").innerText=result);

}
function division(){
    const number1=document.getElementById("number1").value;
    const number2=document.getElementById("number2").value;
    if(number2==0){
        alert("Împărțirea la 0 nu este permisă");

}else{
    result=number1/number2;
    document.getElementById("result").innerText=result;
}
}

function validateData(){
    const number1=document.getElementById("number1").value;
    const number2=document.getElementById("number2").value;
    const errorData=document.getElementById("errorData");

    if(number1===''){
        errorData.innerText="Eroare! Introduceți primul numar:";
        return false;
    }
    else if (number2==='') {
         errorData.innerText="Eroare! Introduceți al 2 lea numar:"
         return false;
    }
    else{
    errorData.innerText="";
    return true;
   }
}