const fs =require('fs');
/* modulo nativo para manipulação de arquivos*/
const path = require('path');

/*caminho do arquivo json*/
const usuariosPath =path.join('usuarios.json');
/*le conteudo do arquivo json*/
let usuarios =fs.readFileSync(usuariosPath,{encoding:'utf-8'});
/*converte JSON para array*/
usuarios =JSON.parse(usuarios);

/** Middleware -validação de cadastro de usuario  */
const usuario = (request,response,next) => {
    let{nome, email, senha} = request.body;

    const emailEncontrado= usuarios.find(emailUsuario=> emailUsuario.email == email)

    if(nome.trim() == "" || email.trim() == "" || senha.trim() == "" ){
        //retorna mensagem e erro
        return response.send("Preencha todos os campos obrigatorios!")
      
    }else if(nome.trim().split(' ').length < 2){
        return response.send("Preencha nome completo")
        
    }else if(emailEncontrado && emailEncontrado !== undefined){
        return response.send("Email já cadastrado");
    
    }else if(nome.length<3 || nome.length > 15){
        response.send("Preencha os campos corretamente!");
    }else{
        /**executa a proxima função/controller */
        next();
    }
}

module.exports = usuario;