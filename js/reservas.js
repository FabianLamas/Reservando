var Reserva = function (horario, cantidadPersonas, precioPersonas, codigoDescuento) {
    this.horario = horario; 
    this.cantidadPersonas = cantidadPersonas;
    this.precioPersonas = precioPersonas; 
    this.codigoDescuento = codigoDescuento;
}

Reserva.prototype.precioBase = function(){
    return this.cantidadPersonas * this.precioPersonas;
}

Reserva.prototype.precioTotal = function(){
    return this.precioBase() + this.calcularAdicionales() -  this.calcularDescuento();
}

Reserva.prototype.calcularDescuento = function(){
    let descuento = 0;

    switch(this.cantidadPersonas){
        case 4,5,6 : 
            descuento += this.precioBase() * 0.05;
            break;
        case 7,8 : 
            descuento += this.precioBase() * 0.10;
            break;
        case (this.cantidadPersonas > 8) : 
            descuento += this.precioBase() * 0.15;
            break;
    }

    switch(this.codigoDescuento){
        case "DES15": 
            descuento += this.precioBase() * 0.15;
            break;
        case "DES200": 
            descuento += 200;
            break;
        case "DES1": 
            descuento += this.precioPersonas;
            break;
    }

    return descuento;
}

Reserva.prototype.calcularAdicionales = function(){
    let adicionales = 0;
    const dia = this.horario.getDay();
    const hora = this.horario.getHours();

    if(dia === 0 || dia === 5 || dia === 6){
        adicionales += this.precioBase() * 0.10;
    }

    if(hora === 13 || hora === 20){
        adicionales += this.precioBase() * 0.05;
    }    

    return adicionales;
}