const { argv } = require('./config/yargs');
const colors = require('colors');
const {
    crearArchivo,
    mostrarTabla
} = require('./multiplicar/multiplicar');

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado` + colors.green(` ${archivo}`)))
            .catch(err => console.log(err));
        break;
    case 'listar':
        mostrarTabla(base, limite);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}