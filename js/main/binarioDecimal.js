const $btnConvt = document.getElementById('convBinDec'),
    $spanResultado = document.getElementById('resultado'),
    $spanResultado2 = document.getElementById('resultado2'),
    $ContentNumerosDerecha = document.getElementById("Ordenados"),
    $PontenciasDos = document.getElementById("PonteciasDos"),
    $ContenIndicaPotencia = document.getElementById("PonteciasNum"),
    $ContentMultiplicacion = document.getElementById("Multiplicacion"),
    $ContentResultado = document.getElementById("Resultados"),
    $BtnMostrarResultados = document.getElementById("MostrarResultados"),
    $NoMostrar = document.getElementById("noMostrar"),
    $BtnCerrarVtn = document.getElementById("CerrarVentana"),
    $Ventana = document.querySelector(".VentanaEmergente"),
    $TextoVentana = document.getElementById("MensajeVentana"),
    valoresAceptados = /^[0-1]+$/;

/* LÓGICA */
function Convertir(Binario) {
    /*Borramos los valores*/
    $ContentNumerosDerecha.textContent = "";
    $PontenciasDos.textContent = "";
    $ContenIndicaPotencia.textContent = "";
    $ContentMultiplicacion.textContent = "";
    $ContentResultado.textContent = "";

    let ArregloNum = [],
        Resultados = [],
        Potencias = [],
        i = 0,
        j = 0,
        suma=0,
        Arreglo = Binario.split("");
        
    Arreglo = Arreglo.reverse();
    
    /* Convertimos string a numeros */
    Arreglo.forEach(el => {
        let parrafo = document.createElement("p");
        parrafo.innerText = el;
        $ContentNumerosDerecha.appendChild(parrafo);
        ArregloNum.push(parseInt(el))
    });

    
    /* Calculamos Potencias */
    ArregloNum.forEach(el => {
        Potencias.push(Math.pow(2, i));
        let IndicaPotencia = document.createElement("p");
        let parrafo = document.createElement("p"),
            Pmultip = document.createElement("p");
        
        parrafo.classList.add("potencias");
        parrafo.innerText = Potencias[i];

        IndicaPotencia.classList.add("IndicaPotencia");
        IndicaPotencia.innerText = `2^${i}`;
        
        Pmultip.innerHTML = `<span>${Potencias[i]}</span> x <span>${el}</span>`;
        Pmultip.classList.add("IndicaPotencia");

        $ContentMultiplicacion.appendChild(Pmultip);
        $ContenIndicaPotencia.appendChild(IndicaPotencia);

        $PontenciasDos.appendChild(parrafo);
        i++;

    });

    /* Calculamos Resultados */
    ArregloNum.forEach(el => {

        Resultados.push((el * Potencias[j]));
        let parrafo = document.createElement("p");
        parrafo.innerText = Resultados[j];
        $ContentResultado.appendChild(parrafo);


        /* Suma Variable global */
        suma += Resultados[j];
        j++;
    });

    $spanResultado.innerText = `"${suma}"`;
    $spanResultado2.innerText = `"${suma}"`;

}


/* VALIDACIONES */
$btnConvt.addEventListener("click", (e) => {
    /* Rescatamos valor */
    let $Binario = document.getElementById('InputBinario').value;
    /* Eliminamos espacios en blanco */
    let Binario = $Binario.trim();
    /* Validamos si estaa vacio */
    if (Binario.length <= 0) {
        $TextoVentana.innerText = "No puedes ingresar espacios";
        $Ventana.classList.add("activo");
        document.getElementById('InputBinario').value = "";
    }
    /* Validos si son números */
    else {
        if (Binario.match(valoresAceptados)) {
            /* Pasamos el valor a la función para convertirlo a binario */
            Convertir(Binario);
        }
        else {
            document.getElementById('InputBinario').value = "";
            $TextoVentana.innerText = "Solo puedes ingresar 1 y 0";
            $Ventana.classList.add("activo");
        }
    }
});

$BtnMostrarResultados.addEventListener("click", (e) => {
    let varResult = document.getElementById("resultado").textContent,
        Procedimiento = document.querySelector(".procedimiento");
    
    varResult = varResult.trim();
    if (varResult.length <=0) {
        $TextoVentana.innerText = "Aún no existen procedimientos";
        $Ventana.classList.add("activo");
    }
    else {
        Procedimiento.style.cssText = "overflow-y: scroll; overflow-x: auto;";
        $NoMostrar.classList.remove("activo");

    }
});


$BtnCerrarVtn.addEventListener("click", (e) => {
    $Ventana.classList.remove("activo");
});
