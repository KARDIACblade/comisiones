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

function validarCampo(idInput, idSpanError) {
    let valor = recuperarTexto(idInput).trim(); //[cite: 2]
    let soloNumeros = /^[0-9]+$/;

    if (valor === "") {
        mostrarSpan(idSpanError, "Este campo no puede estar vacío."); //[cite: 2]
        return false;
    } else if (!soloNumeros.test(valor)) {
        mostrarSpan(idSpanError, "Solo se permiten números."); //[cite: 2]
        return false;
    } else if (valor.length > 5) {
        mostrarSpan(idSpanError, "Máximo 5 dígitos."); //[cite: 2]
        return false;
    } else {
        mostrarSpan(idSpanError, ""); // Limpia el error[cite: 2]
        return true;
    }
}


 function validarVentas() {
 return validarCampo("txtVentas", "errVentas");
 }
 
 // funciones ia
 function validarSueldoBase() {
    return validarCampo("txtSueldoBase", "errSueldoBase");
}

function validarVentas() {
    return validarCampo("txtVentas", "errVentas");
}

function validarPrecio() {
    return validarCampo("txtPrecio", "errPrecio");
}

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

  
    mostrarSpan("spSueldoBase",sueldoBaseDeci);
    mostrarSpan("spComision",comision);
    mostrarSpan("spTotal",total);

}