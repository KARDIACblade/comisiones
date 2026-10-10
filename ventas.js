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

function calcular (){
    //recuperar propiedades de caja de texto
   // let cmpSueldoBase = document.getElementById("txtSueldoBase");
    //let cmpNumeroVenta = document.getElementById("txtVentas");
    //let cmpPrecio = document.getElementById("txtPrecio");
    //recuperar el valor de la caja de texto
    //let sueldoBaseStr = cmpSueldoBase.value;
   // let numeroVentaStr = cmpNumeroVenta.value;
   // let precioStr = cmpPrecio.value;

   //parte 6 mejorando el codigo
    let sueldoBaseStr=recuperarTexto("txtSueldoBase");
    let numeroVentaStr=recuperarTexto("txtVentas");
    let precioStr = recuperarTexto("txtPrecio");

    //convertir de string  a float
    let sueldoBaseDeci = parseFloat(sueldoBaseStr);
    let numeroVentaDeci = parseFloat(numeroVentaStr);
    let precioDeci = parseFloat(precioStr);
    // calcular comision y el total
    let comision = calcularComision(numeroVentaDeci,precioDeci);
    let total = sueldoBaseDeci + comision;
    //buscar id y  mostrar en pantalla
    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");
    spSueldoBase.textContent = sueldoBaseDeci;
    spComision.textContent = comision;
    spTotal.textContent = total;

}