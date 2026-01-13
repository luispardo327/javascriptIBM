class car {
    constructor (marca, modelo,  año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    arrancaElMotor(){
        console.log(`El ${this.marca} ${this.modelo}  motor  esta encendido` );
    }
}


const miCarro = new car ("camaro", "transformer", 2028);
miCarro.arrancaElMotor();