const fs = require('fs')
const chalk = require('chalk')

//coloque o número do dono
global.dono = '559784412501' 

//informações da figurinha 
global.packname = 'figurinha feita por:\ncriador:\ncanal:'
global.author = 'lock-bot\nvenom\nyoutube.com/@VenomModsss'

//coloque seu prefixo
global.prefixo = ["."]

//auto biografia do whatsapp 
global.autobio = true //true = ativo, false = destivado

//respostas 
global.resposta = {
    feito: 'feitinho chefe!',
    admin: 'Este recurso pode ser usado apenas por administradores',
    botAdmin: 'Este recurso só pode ser usado quando o bot é administrador do grupo',
    dono: 'Este recurso pode ser usado apenas pelo proprietário',
    grupo: 'Este recurso é apenas para grupos',
    private: 'Este recurso é apenas para conversas privadas',
    aguarde: 'Aguarde uns minutinho...',
    error: 'Erro!',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`'${__filename} foi atualizado'`))
    delete require.cache[file]
    require(file)
})