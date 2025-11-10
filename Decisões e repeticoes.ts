// Declara uma variável numérica chamada `num` com o valor 16.
const num: number = 16;

// Estrutura condicional simples: avalia o valor de `num`
if (num > 15) {
    // Se `num` for maior que 15, exibe a mensagem correspondente
    console.log("Num maior que 15\n numero: " + num)
} else if (num === 15) {
    // Se `num` for exatamente igual a 15, exibe esta mensagem
    console.log("num igual a 15")
} else {
    // Caso contrário, significa que `num` é menor que 15
    console.log("Num menor que 15")
}





// Cria um objeto literal que mapeia tipos de usuários para mensagens específicas
const typeUser = {
    admin: 'voce é o admin',
    student: 'voce é estudante',
    viewer: 'voce pode visualizar'
}



// Função que valida o tipo de usuário recebido
function validateUser(user: string) {
    // Usa o objeto typeUser como referência
    // `user as keyof typeof typeUser` garante que o parâmetro seja uma das chaves do objeto
    console.log(typeUser[user as keyof typeof typeUser])
}

// Declara uma constante representando o tipo de usuário atual
const usuario = 'admin'

// Testa a função com diferentes tipos de usuários
validateUser(usuario);
validateUser('student');
validateUser('viewer');