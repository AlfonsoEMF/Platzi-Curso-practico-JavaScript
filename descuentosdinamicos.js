//const precioOriginal = 120;
//const descuento = 18;


function calcularPrecioConDescuento(precio, descuento, cupon){
    const porcentajePrecioConDescuento = 100 - descuento - cupon;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = Number(inputPrice.value);

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = Number(inputDiscount.value)

    const inputcupon = document.getElementById("cupones");
    const cuponvalue = (inputcupon.value);

    let descuentocupon;

    if(cuponvalue === "" || cuponvalue === "no tengo" || cuponvalue === "No tengo" || cuponvalue === "NO TENGO"){
        descuentocupon = 0;
    }else if(cuponvalue === "primavera" || cuponvalue === "Primavera" || cuponvalue === "PRIMAVERA"){
        descuentocupon = 10;
    }else if(cuponvalue === "verano" || cuponvalue === "Verano" || cuponvalue === "VERANO"){
        descuentocupon = 25;
    }else if(cuponvalue === "invierno" || cuponvalue === "Invierno" || cuponvalue === "INVIERNO"){
        descuentocupon = 30;
    }else if (cuponvalue !== "primavera" || cuponvalue !== "verano" || cuponvalue != "invierno"){
        alert("Porfavor ingrese el cupon correcto ya sea Primavera, Verano o Invierno");
    }

    const precioConElDescuento = calcularPrecioConDescuento(priceValue, discountValue, descuentocupon);

    const totaldescuento = discountValue + descuentocupon;

    const resultPrice = document.getElementById("resultPrice");

    resultPrice.innerText = "El precio con descuento de " + totaldescuento + "% es de: $" + precioConElDescuento;
}



//console.log({
    //precioOriginal,
    //descuento,
    //porcentajePrecioConDescuento,
    //precioConDescuento,
//});