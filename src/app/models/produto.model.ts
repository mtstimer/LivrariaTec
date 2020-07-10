export class Produto{
    id: string;
    nome: string;
    descricao: string; 
    quantidade: string;
    preco: string;
    dataCadastro: Date;
    dataEdicao: Date;

    imagens: string[];
    tags:  string[];

    idEditora: string;
    idGenero: string;
}