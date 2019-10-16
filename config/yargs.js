const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}


const argv = require('yargs')
    .command('listar', 'Muestra en pantalla la tabla de multiplicar', opciones)
    .command('crear', 'Crea un fichero en disco con la tabla de multiplicar', opciones)
    .help()
    .argv;


module.exports = {
    argv
}

//ANTES
// const argv = require('yargs')
//     .command('listar', 'Muestra en pantalla la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             default: 10,
//             alias: 'l'
//         }
//     })
//     .command('crear', 'Crea un fichero en disco con la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             default: 10,
//             alias: 'l'
//         }
//     })
//     .help()
//     .argv;