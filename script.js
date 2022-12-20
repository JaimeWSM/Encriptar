var vocales=["a","e","i","o","u"," "];
var rempl=["ars","ezx","iwf","okl","upz","vbnm"];

function ocultar(id){
    let division=document.querySelector(id);
    division.style.display="none";
}
function aparecer(id){
    let division1=document.querySelector(id);
    division1.style.display="block"
}
function validarTexto(texto){
    let caracteres=/[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóú]/g;
    let mayusculas=/[A-Z]/g;
    let vacio="";
    let mensaje=document.querySelector("#mensaje");
    if(texto.match(caracteres) || texto.match(mayusculas)){
        mensaje.innerText="No se aceptan acentos, mayúsculas o caracteres especiales.";
        mensaje.style.color="red";
        return true;
    }else if(texto==vacio){
        mensaje.innerText="No ha ingresado ningún texto.";
        mensaje.style.color="red";
        return true;
    }else{
        mensaje.innerText="Solo letras minúsculas y sin acentos.";
        mensaje.style.color="#495057";
        return false;
    }
    
}
let btnEncriptar=document.querySelector("#btn-encriptar");
btnEncriptar.addEventListener("click",function(){
    let txtingreso=document.querySelector("#txt-ingreso").value;
    if(validarTexto(txtingreso)==false){
        let encriptado=encriptar(txtingreso);
        let resultado=document.querySelector("#txt-salida");
        resultado.value=encriptado;
        ocultar("#ocultar");
        aparecer("#aparecer");
    }
})
function encriptar(texto){
    let encriptado="";
    for(var i=0;i<vocales.length;i++){
        encriptado=texto.replaceAll(vocales[i],rempl[i]);
        texto=encriptado;
    }
    return (encriptado);
}
function desencriptar(texto){
    let desencriptado="";
    for(var i=0;i<vocales.length;i++){
        desencriptado=texto.replaceAll(rempl[i],vocales[i]);
        texto=desencriptado;
    }
    return (desencriptado);
}
let btndesencriptar=document.querySelector("#btn-desencriptar");
btndesencriptar.addEventListener("click",function(){
    let txtingreso=document.querySelector("#txt-ingreso").value;
    let desencriptado=desencriptar(txtingreso);
    let mostrar=document.querySelector("#txt-salida");
    mostrar.value=desencriptado;
})
let btncopiar=document.querySelector("#btn-copiar");
btncopiar.addEventListener("click",function(){
    let copiar=document.querySelector("#txt-salida").value;
    navigator.clipboard.writeText(copiar);
    document.querySelector("#txt-ingreso").value="";
})
let btnlimpiar=document.querySelector("#btn-limpiar");
btnlimpiar.addEventListener("click",function(){
    document.querySelector("#txt-ingreso").value="";
    document.querySelector("#txt-salida").value="";
    ocultar("#aparecer");
    aparecer("#ocultar");
})
let btnconvertir=document.querySelector("#btn-convertir");
btnconvertir.addEventListener("click",function(){
    let texto=document.querySelector("#txt-ingreso").value;
    let minuscula=texto.toLowerCase();
    let resultado=document.querySelector("#txt-ingreso")
    resultado.value=minuscula;
})