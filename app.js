const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');


console.clear();
console.log(argv);

// console.log(process.argv);
// console.log('Yargs - argv:', yargs);

// console.log('Base desde yargs:',yargs.b);

// const [ , , base ] = process.argv;
// const [ , numero = 5] = base.split('='); 

// console.log(numero);

// const base = 4;

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.error(err));



