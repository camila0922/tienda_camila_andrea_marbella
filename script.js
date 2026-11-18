// FUNCION PARA multiplicar y sumar
function multiplicarsumar(){
    let numero1= Number(document.getElementById("numero1").value);
    let numero2= Number(document.getElementById("numero2").value);
    let numero3= Number(document.getElementById("numero3").value);
    let numero4= Number(document.getElementById("numero4").value);
    let numero5= Number(document.getElementById("numero5").value);
    let numero6= Number(document.getElementById("numero6").value);
    let numero7= Number(document.getElementById("numero7").value);

    let resultado=numero1*600 + numero2*300 + numero3*500 + numero4*200 + numero5*250 + numero6*170 + numero7*700 ;

    document.getElementById("total").textContent=
      "El resultado de multiplicarsumar es:" + resultado;
}