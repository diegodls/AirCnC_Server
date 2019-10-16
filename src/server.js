const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');//colocar o ./ para não procurar um modulo com o mesmo nome
const path = require('path');
const socketio = require('socket.io')
const http = require('http')

const app = express();
const server = http.Server(app);
const io = socketio(server);


const port = 'PORTA_DE_COMUNICAÇÃO_SEM_ASPAS_PADRÃO_3333';
const urlDB = 'SUA_URL_DO_MONGODB_AQUI';


//IMPORTANTE = se der erro o erro "cannot do raw queries on admin in atlas", troque o "/admin?" na url pelo nome do usuário.
mongoose.connect(urlDB, {
    useNewUrlParser: true, //tirar os avisos do nodemon
    useUnifiedTopology: true, //tirar os avisos do nodemon
})


const connectedUsers = {}; //não é o melhor jeito de armazenar os usuários online, recomenda-se usar um DB, como o www.redis.io

io.on('connection', socket => {//toda vez que algum usuário logar/online, essa função salva as informações dele

    const { user_id } = socket.handshake.query;
    connectedUsers[user_id] = socket.id;

    //console.log('HandShake: ', socket.handshake.query);
    //console.log('Usuário conectado: ', socket.id);
    //socket.on('omini', data => {console.log(data);}); // recebe dados
    //socket.emit('omini', 'world'); // envia dados
})

app.use((req, res, next) => {//função que adiciona o "connectedUsers" para uso em todas as rotas, quase igual herança

    req.io = io; //adiciona o "io" em todas as rotas
    req.connectedUsers = connectedUsers;//adiciona o "connectedUsers" em todas as rotas
    return next(); //continua o fluxo da aplicação, se não trava nesse metodo

});


// req.query = acessar query params (POST/GET) para filtros
// http://localhost:3333/users?idade=30&nome=Diego
// idade: req.query.idade, nome: req.query.nome

//req.params = acessar routes params (PUT/DELETE) 
// http://localhost:3333/users/1 ('/users/:id')
// id: req.params.id

//req.body = acessar o corpo da requisição (os dados sendo enviados)

//app.use(cors({ origin: '[endereço]})´-- caso queira apenas um endereço acessando o servidor

app.use(cors()); //todos sites acessam
app.use(express.json());
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));//usado pelo express para retornar arquivos(usado para retornar a thumb dos spots)


server.listen(port);
console.log('*****SERVIDOR RODANDO***** \n ****PORTA: ' + port)