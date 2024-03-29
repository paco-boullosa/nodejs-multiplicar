const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    if (!Number(base)) {
        console.log('No es un numero');
    } else {
        console.log('======================'.green);
        console.log(` Tabla del ${base}`.green);
        console.log('======================'.green);
        for (let i = 1; i <= limite; i++) {
            console.log(`${ base } * ${ i } = ${ base*i }`);
        }
    }
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return; //despues del reject se sigue ejecutando el codigo
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i}\n`;
        };

        fs.writeFile(`ficheros/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        })
    })
}

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}