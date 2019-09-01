//requerir el yargs
const argv = require('./config/yargs').argv;
//importar colores ;
const colors = require('colors/safe')
    //requerir funcion del multiplicar usar la destructuracion

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//console.log(argv);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        //cuando el comando es listar
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        //si el comando es crear
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`archivo creado `, colors.green(archivo)))
            .catch(err => console.log(err));
        break;

    default:
        console.log('comando no reconocido');
}

//console.log(argv);

//console.log(argv.limite);


//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];