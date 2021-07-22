var numero1 = 0,
    numero2 = 0,
    op, resultado, opg,
    bo = false;
document.getElementById("punto").addEventListener("click", punto);
document.getElementById("n0").addEventListener("click", n0);
document.getElementById("n1").addEventListener("click", n1);
document.getElementById("n2").addEventListener("click", n2);
document.getElementById("n3").addEventListener("click", n3);
document.getElementById("n4").addEventListener("click", n4);
document.getElementById("n5").addEventListener("click", n5);
document.getElementById("n6").addEventListener("click", n6);
document.getElementById("n7").addEventListener("click", n7);
document.getElementById("n8").addEventListener("click", n8);
document.getElementById("n9").addEventListener("click", n9);
document.getElementById("s").addEventListener("click", suma);
document.getElementById("r").addEventListener("click", resta);
document.getElementById("m").addEventListener("click", multiplicacion);
document.getElementById("d").addEventListener("click", divicion);
document.getElementById("igual").addEventListener("click", igual);
document.getElementById("b").addEventListener("click", borrar);
document.getElementById("prociento").addEventListener("click", prociento);
document.getElementById("negativos").addEventListener("click", negativos);
document.addEventListener("keydown", (e) => {
    codigo = (e.key);
    obtenerValor(codigo);
    console.log(codigo);
});

function obtenerValor(cod) {
    switch (cod) {
    	case "Enter":
            igual();
            break;
        case "1":
            n1();
            break;
        case "2":
            n2();
            break;
        case "3":
            n3();
            break;
        case "4":
            n4();
            break;
        case "5":
            n5();
            break;
        case "6":
            n6();
            break;
        case "7":
            n7();
            break;
        case "8":
            n8();
            break;
        case "9":
            n9();
            break;
        case "0":
            n0();
            break;
        case "+":
            suma();
            break;
        case "-":
            resta();
            break;
        case "*":
            multiplicacion();
            break;
        case "/":
            divicion();
            break;
        case "%":
            prociento();
            break;
        case ".":
            punto();
            break;
        case "Backspace":
            borrar();
            break;
    }
}

function prociento() {
    let actula = document.getElementById("resultado").innerHTML;
    if (actula != 0 && !actula.includes("%") && actula.length != 13 && actula != "Infinity") {
        document.getElementById("resultado").innerHTML = actula + "%";
    } else {
        if (actula.includes("%") && actula.length != 13) {
            document.getElementById("resultado").innerHTML = actula.replace("%", '');
        }
    }
}

function negativos() {
    let actula = document.getElementById("resultado").innerHTML;
    if (!actula.includes("-") && actula.length != 13 && actula != "Infinity") {
        document.getElementById("resultado").innerHTML = "-" + actula;
    } else {
        if (actula.includes("-") && actula.length != 13) {
            document.getElementById("resultado").innerHTML = actula.replace("-", '');
        }
    }
}

function borrar() {
        document.getElementById("resultado").innerHTML = 0;
        numero1 = 0;
        numero2 = 0;
        op = null;
        opg = null;
        bo = false;
        resultado = null;
        desactivar();
}

function punto() {
    let actula = document.getElementById("resultado").innerHTML;
    let numero = document.getElementById("punto").innerHTML;
    if (!actula.includes(".") && actula.length != 13) {
        document.getElementById("resultado").innerHTML = actula + numero;
    } else {
        if (actula.includes(".") && actula.length != 13) {
            document.getElementById("resultado").innerHTML = actula.replace(".", '');
        }
    }
}

function numeros(n) {
    let actula = document.getElementById("resultado").innerHTML;
    if (!actula.includes("%")) {
        let numero = document.getElementById("n" + n).innerHTML;
        if (actula == "0" || actula == "-0" || actula == "Infinity") {
            if (actula != "-0" || actula == "Infinity") {
                if (actula == "Infinity") {
                    op = null
                }
                document.getElementById("resultado").innerHTML = numero;
            } else {
                document.getElementById("resultado").innerHTML = "-" + numero;
            }
        } else {
            if (actula.length != 14) {
                document.getElementById("resultado").innerHTML = actula + numero;
            }
        }
        desactivar();
    }
}

function n0() {
    numeros(0);
}

function n1() {
    numeros(1);
}

function n2() {
    numeros(2);
}

function n3() {
    numeros(3);
}

function n4() {
    numeros(4);
}

function n5() {
    numeros(5);
}

function n6() {
    numeros(6);
}

function n7() {
    numeros(7);
}

function n8() {
    numeros(8);
}

function n9() {
    numeros(9);
}

function suma() {
    Operacion("s", "+");
}

function resta() {
    Operacion("r", "-");
}

function multiplicacion() {
    Operacion("m", "x");
}

function divicion() {
    Operacion("d", "/");
}

function Operacion(nombre, tipo) {
    if (numero1 != null) {
        desactivar();
        active(nombre);
        if (parseFloat(document.getElementById("resultado").innerHTML) == 0) {
            numero1 = numero1;
        } else {
            if (numero1 == 0) {
                numero1 = document.getElementById("resultado").innerHTML;
            } else {
                numero2 = document.getElementById("resultado").innerHTML;
            }
        }
        document.getElementById("resultado").innerHTML = 0;
        opg = null;
        if (numero2 != 0) {
            operaciones();
            numero1 = resultado;
            resultado = 0;
        }
        op = tipo;
        bo = true;
    }
}

function operaciones() {
    if (op == "+" || opg == "+") {
        if ((numero1.toString()).includes("%") || (numero2.toString()).includes("%")) {
            operacion_procentaje();
        } else {
            resultado = parseFloat(numero1) + parseFloat(numero2);
        }
    } else {
        if (op == "-" || opg == "-") {
            if ((numero1.toString()).includes("%") || (numero2.toString()).includes("%")) {
                operacion_procentaje();
            } else {
                resultado = parseFloat(numero1) - parseFloat(numero2);
            }
        } else {
            if (op == "x" || opg == "x") {
                if ((numero1.toString()).includes("%") || (numero2.toString()).includes("%")) {
                    operacion_procentaje();
                } else {
                    resultado = parseFloat(numero1) * parseFloat(numero2);
                }
            } else {
                if (op == "/" || opg == "/") {
                    if ((numero1.toString()).includes("%") || (numero2.toString()).includes("%")) {
                        operacion_procentaje();
                    } else {
                        resultado = parseFloat(numero1) / parseFloat(numero2);
                    }
                } else {
                    resultado = parseFloat(numero1);
                }
            }
        }
    }
}

function operacion_procentaje() {
    switch (op) {
        case "+":
            if ((numero1.toString()).includes("%")) {
                numero1 = numero1.replace("%", '');
                resultado = (parseFloat(numero2) + (parseFloat(numero1) * parseFloat(numero2) / 100));
            } else {
                numero2 = numero2.replace("%", '');
                resultado = (parseFloat(numero1) + (parseFloat(numero2) * parseFloat(numero1) / 100));
            }
            break;
        case "-":
            if ((numero1.toString()).includes("%")) {
                numero1 = numero1.replace("%", '');
                resultado = (parseFloat(numero2) - (parseFloat(numero1) * parseFloat(numero2) / 100));
            } else {
                numero2 = numero2.replace("%", '');
                resultado = (parseFloat(numero1) - (parseFloat(numero2) * parseFloat(numero1) / 100));
            }
            break;
        case "x":
            if ((numero1.toString()).includes("%")) {
                numero1 = numero1.replace("%", '');
                resultado = (parseFloat(numero2) * (parseFloat(numero1) / 100));
            } else {
                numero2 = numero2.replace("%", '');
                resultado = (parseFloat(numero1) * (parseFloat(numero2) / 100));
            }
            break;
        case "/":
            if ((numero1.toString()).includes("%")) {
                numero1 = numero1.replace("%", '');
                resultado = (parseFloat(numero2) / (parseFloat(numero1) / 100));
            } else {
                numero2 = numero2.replace("%", '');
                resultado = (parseFloat(numero1) / (parseFloat(numero2) / 100));
            }
            break;
    }
}

function igual() {
    var comprova = "";
    if ((document.getElementById("resultado").innerHTML) != "Infinity" || bo == true) {
        desactivar();
        if (opg == null && op == null) {
            numero1 = document.getElementById("resultado").innerHTML;
        } else {
            if (opg == null) {
                numero2 = document.getElementById("resultado").innerHTML;
            }
        }
        operaciones();
        comprova = resultado.toString();
        if (comprova.length >= 13) {
            comprova = parseInt(comprova.length - 13);
            console.log(comprova);
            resultado = resultado.toExponential(comprova);
            document.getElementById("resultado").innerHTML = resultado;
        } else {
            document.getElementById("resultado").innerHTML = resultado;
        }
        numero1 = resultado;
        if (op != null) {
            opg = op;
        }
        op = null;
        bo = false;
    }
}

function desactivar() {
    var operaciones = ["s", "r", "m", "d"];
    for (var i = 0; i < operaciones.length; i++) {
        botones = document.getElementById(operaciones[i]);
        if (botones.classList.contains("active")) {
            botones.classList.toggle("active");
        }
    }
}

function active(de) {
    botones = document.getElementById(de);
    if (!botones.classList.contains("active")) {
        botones.classList.toggle("active");
    }
}