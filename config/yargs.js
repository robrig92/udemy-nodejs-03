const options = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        demand: false,
        alias: 'l',
        default: 10,
    }
};
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', options)
    .command('crear', 'Genera un archivo con la tabla', options)
    .help()
    .argv;

module.exports = {
    argv
};