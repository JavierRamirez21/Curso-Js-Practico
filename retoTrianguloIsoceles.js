function CalcularAlturaIsoceles(lado1,lado2,base){
    if(lado1==lado2 && lado1!=base){
        console.log("Es un triangulo isoceles");
        var cateOpuesto=(base/2)**2;
        var hipotenusa=lado1**2;
        var altura=Math.sqrt((hipotenusa-cateOpuesto));
        console.log("La altuta es de: "+altura);

    }else{
        console.log("No es un tringulo isoceles");
    }
}
CalcularAlturaIsoceles(5,5,8);