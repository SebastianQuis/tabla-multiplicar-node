const fs = require('fs');
const colors = require('colors');

// fs.writeFile(file, data[, options], callback)

const crearArchivo = (num, listar = false, hasta = 10) => {

    return new Promise((resolve, reject) => {
        let consola = `
============================
        TABLA DEL ${colors.bold(num)}        
============================\n`.green;
        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            consola  += `${i} ${'X'.green} ${num} ${'='.green} ${i*num}\n`;
            salida += `${i} X ${num} = ${i*num}\n`;
        }

        if ( listar ) {
            console.log(consola);
        }

        // fs.writeFile(`tabla-${base}.txt`, data, (err) => {
        //     if (err) throw err;
        //     console.log('Se mostró el archivo correctamente');
        //   });

        try {
            fs.writeFileSync(`./salida/tabla-${num}.txt`, salida)
            resolve(`tabla-${num}.txt`.bgGreen); 
            // console.log('Se mostró el archivo correctamente');
        } catch (error) {
            throw error;
        }
    });

}

module.exports = {
    crearArchivo
}