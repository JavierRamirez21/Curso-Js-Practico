function esPar(numerito){//helpers
    return (numerito%2===0);
}

function calcularMediaAritmetica(lista){
    var sumaLista = lista.reduce(
        function(valorAcum=0,NuevoElemento){
            return valorAcum+NuevoElemento;
    });
    var promedioLista=sumaLista/lista.length;
    return promedioLista;
}

var salariosCol=colombia.map(
    function(personita){
    return personita.salary;
});

var salariosColOrdenada=salariosCol.sort(
    function(salaryA,salarayB){
        return salaryA-salarayB;
});



function medianaSalaraios(lista){
    var mitad=parseInt(lista.length/2);
    if(esPar(lista.lenght)){
        var personitaMitad1=lista[mitad-1];
        var personitaMitad2=lista[mitad];
        var mediana=calcularMediaAritmetica([personitaMitad1,personitaMitad2]);
        return mediana;
    }else{
        var personitaMitad=lista[mitad];
        return personitaMitad;
    }
}
//mediana general
var medianaGeneral=medianaSalaraios(salariosColOrdenada)
//mediana top 10
var spliceStar=(salariosColOrdenada.length*90)/100;
var spliceCount=salariosColOrdenada.length-spliceStar;
var salariosTop10=salariosColOrdenada.splice(spliceStar,spliceCount);
var medianaTop10=medianaSalaraios(salariosTop10);
console.log(medianaGeneral);

console.log(medianaTop10);
