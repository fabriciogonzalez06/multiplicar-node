const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

//comandos utilizando node app 'aquí van los comandos '  'aqui los argumentos'
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'crea una tabla de multiplicar', opts)
    .help()
    .argv;



//exportar modulos    
module.exports = {
    argv
}