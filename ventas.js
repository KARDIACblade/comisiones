const VENTAS_BASE = 5;
const PORCENTAJE_COMISION = 0.10;

function calcularComision (numeroVenta,precioProducto){
    let comision = 0;
    if (numeroVenta > VENTAS_BASE){
        let ventasExtra = numeroVenta-VENTAS_BASE;
        comision = ventasExtra*(precioProducto* PORCENTAJE_COMISION);
    }  
    return comision;
}
//validar con IA


// Validaciones (hechas con IA)
function validarCampo(idInput, idSpanError, min, max) {
    let valor = recuperarTexto(idInput).trim();
    let numeroValido = /^[0-9]+(\.[0-9]{1,2})?$/;

    if (valor === "") {
        mostrarSpan(idSpanError, "Este campo no puede estar vacío.");
        return false;
    }
    if (!numeroValido.test(valor)) {
        mostrarSpan(idSpanError, "Solo números positivos (máx. 2 decimales).");
        return false;
    }
    let numero = parseFloat(valor);
    if (numero < min) {
        mostrarSpan(idSpanError, "El valor mínimo es " + min + ".");
        return false;
    }
    if (numero > max) {
        mostrarSpan(idSpanError, "El valor máximo es " + max + ".");
        return false;
    }
    mostrarSpan(idSpanError, "");
    return true;
}

function validarSueldoBase() { return validarCampo("txtSueldoBase", "errSueldoBase", 1, 99999); }
function validarVentas()     { return validarCampo("txtVentas", "errVentas", 0, 99999); }
function validarPrecio()     { return validarCampo("txtPrecio", "errPrecio", 1, 99999); }
function calcular (){
    //validar CON IA
    // Se cambió para validar los 3 inputs antes de calcular[cite: 5]
    let vSueldo = validarSueldoBase();
    let vVentas = validarVentas();
    let vPrecio = validarPrecio();

    if (!vSueldo || !vVentas || !vPrecio) {
        return; // Detiene la ejecución si hay errores
    }
      

  
    let sueldoBaseDeci = recuperarFloat("txtSueldoBase");
    let numeroVentaDeci = recuperarFloat("txtVentas");
    let precioDeci = recuperarFloat("txtPrecio")

    let comision = calcularComision(numeroVentaDeci,precioDeci);
    let total = sueldoBaseDeci + comision;

  
mostrarSpan("spSueldoBase", "$" + sueldoBaseDeci.toFixed(2));
mostrarSpan("spComision", "$" + comision.toFixed(2));
mostrarSpan("spTotal", "$" + total.toFixed(2));

}