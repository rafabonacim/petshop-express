const fs = require('fs');

const log = (req,res,next) => {
    /**criar o arquivo log.text se não existir e adicionar mensagem no arquivo */
    fs.appendFileSync('log.txt', `O usuario acessou a url: ${req.url} \n`);
    /** executa a proxima função(controller) */
    next();
}
/** exporta o middleware */
module.exports = log;