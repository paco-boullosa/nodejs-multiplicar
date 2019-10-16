const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//sin yargs sería asi
// let argv = process.argv;
// let par = argv[2];
// let base = par.split('=')[1];

let comando = argv._[0]; //los comandos vienen en el array de argv llamado "_"


switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((fichero => {
                console.log(`Archivo creado ${fichero}`.blue);
            }))
            .catch((err) => {
                console.log(err.red);
            });
        break;

    default:
        console.log('Comando no reconocido'.red);
        break;

}