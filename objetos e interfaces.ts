interface Pessoa {
    nome:string,
    idade:number,
    profissao?:string
}


const joao:Pessoa = {
    nome: 'joao', idade:26, profissao:'Técninco SEO'
}

const stella:Pessoa = 
{
    nome:'stella', idade: 25
}


const arrayObjetos: Array<Pessoa> = [
    joao,
    stella
]

console.log(arrayObjetos)