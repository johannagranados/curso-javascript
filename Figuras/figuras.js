console.group("Cuadrado");
function squarePerimeter (){
    var inputSquare = document.getElementById("inputCuadrado");
    var lado = inputSquare.value;
    var permietro = lado*4;
    alert(permietro);
} 
function squareArea(lado){
    var inputSquare = document.getElementById("inputCuadrado");
    var lado = inputSquare.value;
    var area = lado*lado;
    alert(area);
} 
console.log("El perimetro es " + squarePerimeter + " y el área es "+squareArea);
console.groupEnd;