const VENTAS_BASE = 5;
const PORCENTAJE_COMISION = 0.1;

function calcularComision (numeroVenta,precioProducto){
    let comision = 0;
    if (numeroVenta > VENTAS_BASE){
        let ventasExtra = numeroVenta-VENTAS_BASE;
        comision = ventasExtra*(precioProducto* PORCENTAJE_COMISION);
    }  
    return comision
}

function calcular (){
    //recuperar propiedades de caja de texto
    let cmpSueldoBase = document.getElementById("txtSueldoBase");
    let cmpNumeroVenta = document.getElementById("txtVentas");
    let cmpPrecio = document.getElementById("txtPrecio");
    //recuperar el valor de la caja de texto
    let sueldoBaseStr = cmpSueldoBase.value;
    let numeroVentaStr = cmpNumeroVenta.value;
    let precioStr = cmpPrecio.value;
    //convertir de string  a float
    let sueldoBaseEntero = parseFloat(sueldoBaseStr);
    let numeroVentaEntero = parseFloat(numeroVentaStr);
    let precioEntero = parseFloat(precioStr);
    


}