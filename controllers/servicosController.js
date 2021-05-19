//metodo index lista serviços
//metodo show que exibe detalhes do serviço

const servicosController = {
    index: (request,response)=>{
        return response.send("Lista de serviços");

    },
    show: (request,response)=>{
        const{nome}=request.params
        return response.send(`exibindo detalhes do servço ${nome}`)
    }


}

module.exports =servicosController;