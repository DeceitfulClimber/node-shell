const fs = require('fs');
const request = require('request');

function ls(done) {
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        let resultadoFinal = ""
        files.forEach(function(file) {
        resultadoFinal += file.toString() + "\n"
        })
        done(resultadoFinal)
      });
}

function pwd(done) {
    done(process.argv[1])
}

function date(done) {
    let date = new Date()
    done(date.toString())
}

function echo(data, done) {
    done(data.join(" "))
}

function cat(archivos, done) {
    archivos.forEach(function(archivo) {
        fs.readFile(archivo, "utf-8", function(err, data) {
            if(err) throw err;
            done(data);
        })
    })
}

function head(archivos, done) {
    archivos.forEach(function(archivo) {
        fs.readFile(archivo, "utf-8", function(err, data) {
            if(err) throw err;
            let lineas = data.split("\n").splice(0,5);
            let resultadoFinal = "\n" + "-------------------------------------------------"
            lineas.forEach(function(linea) {
                resultadoFinal += "\n" + linea
            })
            done(resultadoFinal)
        })
    })
}

function tail(archivos, done) {
    archivos.forEach(function(archivo) {
        fs.readFile(archivo, "utf-8", function(err, data) {
            if(err) throw err;
            let lineas = data.split("\n");
            let masLineas = lineas.slice(lineas.length - 5)
            let resultadoFinal = "\n" + "-------------------------------------------------"
            masLineas.forEach(function(linea) {
              resultadoFinal += "\n" + linea
             })
            done(resultadoFinal)
        })
    })
}        

// function leerArchivos(nombre) {
//     fs.readFile(nombre, "utf-8", function(err, data) {
//         process.stdout.write("\n" + "-------------------------------------------------")
//        if(err) throw err;
//        let lineas = data.split("\n");
//    })
//    return lineas
// }

function sort(archivos, done) {
    archivos.forEach(function(archivo) {
        fs.readFile(archivo, "utf-8", function(err, data) {
            //  done("\n" + "-------------------------------------------------")
            if(err) throw err;
            let lineas = data.split("\n").sort();
            resultadoFinal = ""
            lineas.forEach(function(linea) {
              resultadoFinal += "\n" + linea
             })
            done(resultadoFinal)
        })
    })
}

function wc(archivos, done) {
    archivos.forEach(function(archivo) {
        fs.readFile(archivo, "utf-8", function(err, data) {
            if(err) throw err;
            let lineas = data.split("\n");
            let resultadoFinal = "\n" + "-------------------------------------------------" + "\n"
            
            resultadoFinal += "numero de lineas: " + lineas.length + "\n"
            
            let palabras = lineas.reduce((a,b) => a + b.split(" ").length, 0)
            resultadoFinal += "-------------------------------------------------" + "\n" + "numero de palabras: " + palabras
            
            let caracteres = lineas.reduce((a,b) => a + b.split("").length, 0)
            resultadoFinal += "\n" + "-------------------------------------------------" + "\n" + "numero de caracteres: " + caracteres

            done(resultadoFinal)
        })
    })
}

function uniq(archivos, done) {
    archivos.forEach(function(archivo) {
        fs.readFile(archivo, "utf-8", function(err, data) {
            if(err) throw err;
            let lineas = data.split("\n").sort();
            let resultadoFinal = "\n" + "-------------------------------------------------" + "\n"
            for(let i = 0; i < lineas.length; i++) {
                if(lineas[i] !== lineas[i + 1]) resultadoFinal += lineas[i] + "\n"
            }
            done(resultadoFinal)
        })
    })
}

function curl(url, done) {
    request(url[0], function (error, response, body) {
        if(error) done('error:' + error);   // Print the error if one occurred
        else done('body: ' + body.toString()); // Print the HTML for the Google homepage.
});
}

function find(ls) {
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        let resultadoFinal = ""
        files.forEach(function(file) {
        resultadoFinal += file.toString() + "\n"
        })
        done(resultadoFinal)
      });

      
}
module.exports = {pwd, ls, date, echo, cat, head, tail, sort, wc, uniq, curl, find}