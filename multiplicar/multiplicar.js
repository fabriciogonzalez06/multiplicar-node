//requires
let fs = require('fs');
const colors = require('colors')

//funcion para listar tablas
let listarTabla = (base, limite = 10) => {

    console.log(`===================================`.green);
    console.log(`==========tabla de  ${base}========`.green);
    console.log(`===================================`.green);


    for (let i = 1; i <= limite; i++) {

        console.log(` ${base} * ${i}  =  ${base*i}`);
    }

}

//funcion para crear la tabla de multiplicar segun la base 
let crearArchivo = (base, limite = 10) => {

    //retornar una promesa 
    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject(`El valor ${base } no es un número`);
            return; //con este return se sale del flujo de ejecucion
        }

        for (let i = 1; i <= limite; i++) {

            data += ` ${base} * ${i}  =  ${base*i} \n`;
        }

        //ya una ves hechos los calculos necesarios retornar el reject y resolve respectivamente
        fs.writeFile(`tablas/tabla-${base}-hasta-${limite}.txt `, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt  hasta ${limite}`);


        });

    });

}

//exportar la funcion de manera global
//con el emscript 6 ya no es necesario poner el el objeto name:name solamanete el nombre del archivo a exportar para que no haya redundancia
module.exports = {
    crearArchivo,
    listarTabla
}