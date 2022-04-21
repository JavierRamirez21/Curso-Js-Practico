//Codigo del cuadrado
/*
const ladoCuadrado=5;
console.group("Cuadrados");
console.log("Los lados del cuadrado miden: "+ladoCuadrado+"cm");

const perimetroCuadrado=ladoCuadrado*4;
console.log("EL perimetro es de: "+perimetroCuadrado+"cm");

const areaCuadrado= ladoCuadrado*ladoCuadrado;
console.log("El area es de: "+areaCuadrado+"cm²");
console.groupEnd();
*/

function perimetroCuadrado(lado) {
    return lado * 4;
  }

  function areaCuadrado(lado) {
    return lado * lado;
  }
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
  }
  function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const area = areaCuadrado(value);
    alert(area);
  }