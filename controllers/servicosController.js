/* modulo instalado para manipulação de arquivos*/
const fs =require('fs');
/* modulo nativo para manipulação de arquivos*/
const path = require('path');
/* modulo instalado para gerar id*/
const{uuid} =require('uuidv4');

/*caminho do arquivo json*/
const servicosPath =path.join('servicos.json');
/*le conteudo do arquivo json*/
let servicos =fs.readFileSync(servicosPath,{encoding:'utf-8'});
/*converte JSON para array*/
servicos =JSON.parse(servicos);

//metodo index lista serviços
//metodo show que exibe detalhes do serviço

const servicosController = {
    index: (request,response)=>{
        return response.render('adminServicos', {titulo:'Serviços', servicos:[]});
    },
    cadastro: (request,response) =>{
        return response.render('servicosCadastro',{titulo: 'Cadastrar Serviço'});
    },
    salvar:(request,response)=>{
        let {nome,descricao,preco,ilustracao} = request.body;
        /* adiciona o novo servico no array*/
        servicos.push({id: uuid(),nome, descricao, preco, ilustracao});
        /** converter o array para json  */
        let dadosJson =JSON.stringify(servicos);
        
        /*salva json atulaizado no arquivo*/
        fs.writeFileSync(servicosPath,dadosJson);

        /*redireciona para lista de servicos */
        return response.redirect('/admin/servicos');
    },
    show: (request,response)=>{
        const{nome}=request.params;
        return response.send(`exibindo detalhes do servço ${nome}`)
    }
}

module.exports =servicosController;