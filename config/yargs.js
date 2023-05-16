

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar',
    })
    .option( 'l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la lista en consola',
    })
    .option( 'h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Número máximo en tabla de multiplicar',
    })
    .check( (argv, options) => {
        if ( isNaN( argv.b )){
            throw 'La base tiene que ser un número';
        }
        if (argv.l == false) {
            throw 'Tiene que solicitar el listado';
        }
        if ( isNaN( argv.h ) ) {
            throw 'Hasta tiene que ser un número';
        }
        return true;
    })
    .argv;

module.exports = argv;