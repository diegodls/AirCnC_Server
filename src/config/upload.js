const multer = require('multer');
const path = require('path')

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        //__dirname  retorna o diretório atual do arquivo caso a execução falhe em achar "onde esta"
        //'..', '..' é usado pois as barras (../) podem não ser entendidas pelo windows, o path.resolve resolve isso colocarndo a barra certa de cada sistema.
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname) //extensão do arquivo no nome(file.originalname) do arquivo
            const name = path.basename(file.originalname, ext) //nome do arquivo no nome(file.originalname), removendo a extensão(ext)

            cb(null, `${name}-${Date.now()}${ext}`)

            //cb = função de callback, é executada após pegar as informações do arquivo (após a seleção do arquivo, por exemplo)
            //cb(null,) = parametro de erro
           
        },
    })
}