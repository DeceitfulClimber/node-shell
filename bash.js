let {pwd, ls, date, echo, cat, head, tail, sort, wc, uniq, curl, find} = require("./command")


// Un prompt como output
process.stdout.write('prompt > ');

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on('data', function (data) {
    let input = data.toString().trim().split(" ")
    let comando = input[0]
    let parametros = input.splice(1)

    switch(comando) {
        case "pwd" : pwd(done);
        break
        case "ls" : ls(done);
        break
        case "date" : date(done);
        break
        case "echo" : echo(parametros, done)
        break
        case "cat" : cat(parametros, done)
        break
        case "head" : head(parametros, done)
        break
        case "tail" : tail(parametros, done)
        break
        case "sort" : sort(parametros, done)
        break
        case "wc" : wc(parametros, done)
        break
        case "uniq" : uniq(parametros, done)
        break
        case "curl" : curl(parametros, done)
        break
        case "find" : find
    }
//   let cmd = data.toString().trim(); // Remueve la nueva línea
//   process.stdout.write('You typed: ' + cmd);
// process.stdout.write('\nprompt > ');
});

const done = function(output) {
    // Muestra el output
    process.stdout.write(output);
    // Muestra el prompt
    process.stdout.write('\nprompt > ');
  }