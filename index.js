const fs = require('fs');
const chalk = require('chalk');




// VERSIÓN ASÍNCRONA:

// fs.readdir('./ficheros', (err, files) => {
//     if (err) return console.log(err);
//     console.log(files);
//     let archivosFiltrados = files.filter(archivo => archivo.includes(".md"));
//     console.log(chalk.green(archivosFiltrados));
//     for (let archivo of archivosFiltrados) {
//         fs.readFile(`./ficheros/${archivo}`, 'utf-8', (err, data) => {
//             if (err) return console.log(err);
//             console.log(chalk.magentaBright(data));
//         });
//     }
// });

// // VERSIÓN ASÍNCRONA v2:

// fs.readdir('./ficheros', (err, files) => {
//     if (err) return console.log(err);
//     let archivosFiltrados = files.filter(archivo => archivo.includes(".md"));
//     console.log(chalk.green(archivosFiltrados));
//     archivosFiltrados.forEach(data => {
//         fs.readFile(`./ficheros/${data}`, 'utf-8', (err, data) => {
//             if (err) return console.log(err);
//             console.log(chalk.magentaBright(data) + "\n VERSIÓN ASÍNCRONA v2");
//         });
//     });


// });


// // VERSIÓN SÍNCRONA:

const files = fs.readdirSync('./ficheros');
console.log(files);
let archivosFiltrados = files.filter(archivo => archivo.includes(".md"));
console.log(chalk.green(archivosFiltrados));
for (let archivo of archivosFiltrados) {
    const data = fs.readFileSync(`./ficheros/${archivo}`, 'utf-8');
    console.log(chalk.magentaBright(data) + " \n de forma sincrona");
};





