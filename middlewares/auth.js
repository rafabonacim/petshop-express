/** verificar se existe a session usuarioLogado
 * 
 * se o usuario estiver logado: next()
 * 
 * se não tiver logado: redireciona para /login
 */
/** Middleware -validação de cadastro de serviço */
const auth = (request,response,next) => {
    //if (typeof req.session.usuarioLogado !== "undefined") {
    if(request.session.usuarioLogado && request.session.usuarioLogado !== undefined){
        console.log('Você esta logado');
        next();
    }else{
        response.redirect('/login')
        
    }
}

module.exports = auth;