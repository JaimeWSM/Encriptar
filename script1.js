const txtingreso=document.querySelector("#txt-ingreso");
const txtsalida=document.querySelector("#txt-salida");
const btnencriptar=document.querySelector("#btn-encriptar");
const btndesencriptar=document.querySelector("#btn-desencriptar");
const btncopiar=document.querySelector("#btn-copiar");
const vocales={"e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};
const men=document.querySelector("#men");

function validarTexto(texto){
    let caracteres=/[^a-zA-Z0-9 ]/g;
    let mayusculas=/[A-Z]/g;
    let vacio="";
    if(texto.match(caracteres) || texto.match(mayusculas)){
        men.innerText="Solo minúsculas, sin caracteres especiales.";
        men.style.color="red";
        return true;
    }else if(vacio==texto){
        men.innerText="No ha ingresado ningún texto.";
        men.style.color="darkred";
        return true;
    }else{
        men.innerText="Formato correcto.";
        men.style.color="green";
        return false;
    }
}
function ocultar(id){
    let o=document.querySelector(id);
    o.style.display="none";
}
function mostrar(id){
    let m=document.querySelector(id);
    m.style.display="flex";
}
btnencriptar.addEventListener("click",()=>{
    let textoingresao=txtingreso.value;
    if(validarTexto(textoingresao)==false){
        let encriptado=encriptar(textoingresao);
        let resultado=txtsalida;
        resultado.value=encriptado;
        ocultar("#mensajeinicio");
        mostrar("#resultado");
    }
})
btndesencriptar.addEventListener("click",()=>{
    let textoingresao=txtingreso.value;
    let desencriptado=desencriptar(textoingresao);
    let resultado=txtsalida;
    resultado.value=desencriptado;
})
function encriptar(texto){
    let encriptado="";
    for(const obj in vocales){
        encriptado=texto.replaceAll(obj,vocales[obj]);
        texto=encriptado;
    }
    return (encriptado);
}
function desencriptar(texto){
    let desencriptado="";
    for(const obj in vocales){
        desencriptado=texto.replaceAll(vocales[obj],obj);
        texto=desencriptado;
    }
    return (desencriptado);
}
btncopiar.addEventListener("click", ()=>{
    let resultado=txtsalida.value;
    navigator.clipboard.writeText(resultado);
    txtingreso.value="";
})
