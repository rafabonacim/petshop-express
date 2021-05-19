const petsController = {
    index: (request,response) => {
        return response.send('petsController ta funcionando!');
    },
    show: (request,response)=> {
        //console.log(request.params);
        //pegando parametro nome da rota /pets/:nome
        const {nome} = request.params;
        return response.send(`exibindo detalhes do pet ${nome}`)
    }

}
//usa o module.exports modulo para reconhecer que nao é so um objeto e sim um modulo
//esse é o modulo do pets controller que vai ter o metodo index
module.exports =petsController;