const fs = require("fs");
const colors = require("colors");

// Con Promesa
// const crearArchivo =  ( base = 5 ) => {

//     return new Promise(( resolve, reject ) => {

//         console.log('================');
//         console.log(`  Tabla del: ${ base }  `);
//         console.log('================')

//         let salida = '';

//         for ( let i = 0; i < 11; i++ ){
//         salida += `${ base } x ${ i } = ${ base*i }\n`;
//         }

//         console.log(salida);

//         // ( salida ) ? resolve( salida ) : reject( `Error al crear archivo` );

//         fs.writeFileSync( `table-${base}.txt`, salida);

//         resolve(`tabla-${ base}.txt creado`);

//     })

//}

// Con async await:

const crearArchivo = async (base = 5, listar, hasta) => {
  try {
    console.log("================".green);
    console.log("  Tabla del:".green, colors.blue(base));
    console.log("================".green);

    let salida = "";
    let consola = "";

    for (let i = 1; i < hasta + 1; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
    }

    if (listar) {
      console.log(consola);
    }

    // ( salida ) ? resolve( salida ) : reject( `Error al crear archivo` );

    fs.writeFileSync(`./salida/table-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
