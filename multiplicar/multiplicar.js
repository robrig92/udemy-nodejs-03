const fs = require('fs');
const colors = require('colors');

let generarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('Se esperaba un valor numérico para la base');
            return;
        }

        if (!Number(limite)) {
            reject('Se esperaba un valor numérico para el límite');
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index} \r\n`;
        }

        resolve({ data });
    });
}

let mostrarTabla = (base, limite) => {
    generarTabla(base, limite)
        .then(tabla => {
            console.log('==================='.green);
            console.log(`  Tabla de ${base}`.green);
            console.log('==================='.green);
            console.log(tabla.data)
        })
        .catch(err => console.log);
}

let crearArchivo = (base, limite) => {
    return generarTabla(base, limite)
        .then((tabla) => {
            return new Promise((resolve, reject) => {
                fs.writeFile(`tablas/tabla-${base}.txt`, tabla.data, (err) => {
                    if (err) reject(err);
                    resolve(`tabla-${base}.txt`);
                });
            });
        })
        .catch(err => console.log(err));
}

module.exports = {
    mostrarTabla,
    crearArchivo
};