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
//validar
 function validarVentas(){
    let numeroVentaStr = recuperarTexto("txtVentas")
        if (numeroVentaStr.length > 5 ){
            alert("Maximo 5")
            return false
        }else{
            return true
        }

 }



function calcular (){
    //validar
        if (validarVentas()==false){
            return;
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