# AirCnC_server
Servidor para o sistema AirCnC(veja mais sobre nos aplicativos).\
![imagem exemplo](https://user-images.githubusercontent.com/41457134/66946637-bbffb900-f027-11e9-9f6d-729a33135ccf.png)\

# Desenvolvimento
Este servidor foi desenvolvido utilizando NodeJS utilizando as dependências abaixo.\
O servidor ficará responsável por prover as rotas para a versão Mobile e Web, e a comunicação com o banco de dados, desde a criação dos objetos, a entrega dos dados.

# Dependências
[express](https://www.npmjs.com/package/express)\
[multer](https://www.npmjs.com/package/multer)\
[cors](https://www.npmjs.com/package/cors)\
[socket.io](https://www.npmjs.com/package/socket.io)\
[nodemon](https://www.npmjs.com/package/nodemon)\
*Nodemon foi instalado em modo desenvolvedor (yarn add nodemon -D)*

# Utilização
###### Passo 1: 
```
git clone
```
###### Passo 2:
```
Para utilizar esse servidor, você terá que:
Inserir a url para armazenar as thumbnails no arquivo **src\Spot.js** .
Inserir a url do MongoDb e a porta de comunicação no arquivo **server.js**.
```

###### Passo 3: 

```
abra um terminal na pasta clonada
yarn start
```

# Todo
- [ ] Tratamentos nos campos
- [ ] Me conte...

# Notas
Apesar de estar funcional, o servidor necessita de alguns tratamentos, desenvolvido apenas para aprendizado, futuras atualziações poderam ser feitas.\
**Sinta-se livre para entrar em contato.**
