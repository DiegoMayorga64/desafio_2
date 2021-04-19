function limpieza() {
    document.getElementById("resultado").innerHTML = "0";
}

function removerCero() {
    var valor = document.getElementById("resultado").innerHTML;
    if (valor == "0") {
         valor = " "
         document.getElementById("resultado").innerHTML = valor;
    }
}

function perc() {
    var valor = document.getElementById("resultado").innerHTML;
    valor = valor / 100;
    document.getElementById("resultado").innerHTML = valor;
}

function colocar(value) {
    removerCero()
    document.getElementById("resultado").innerHTML += value;
}

function resolucion() {
    removerCero()
    var ecuacion = document.getElementById("resultado").innerHTML;
    var resultado = eval(ecuacion);
    document.getElementById("resultado").innerHTML = resultado;
}