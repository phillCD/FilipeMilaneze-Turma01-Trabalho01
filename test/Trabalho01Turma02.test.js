const Biblioteca = require("../src/Trabalho01Turma02");

describe('Biblioteca', () => {
    let biblioteca;

    beforeEach(() => {
        biblioteca = new Biblioteca();
    });

    test('Deve adicionar um livro', ()=>{
        const livro = {id: 1, titulo: 'Livro 1', emprestado: false, idMembro: null};
        biblioteca.adicionarLivro(livro);
        expect(biblioteca.livros).toContain(livro)
    });

    test('Deve remover um livro', ()=>{
        const livro = {id: 1, titulo: 'Livro 1', emprestado: false, idMembro: null};
        biblioteca.adicionarLivro(livro);
        biblioteca.removerLivro(1);
        expect(biblioteca.livros).not.toContain(livro)
    });

    test('Deve encontrar um livro por id', ()=>{
        const livro = {id: 1, titulo: 'Livro 1', emprestado: false, idMembro: null};
        biblioteca.adicionarLivro(livro);
        const resultadoBusca = biblioteca.buscarLivroPorId(1);
        expect(resultadoBusca).toBe(livro)
    });

    test('Deve buscar um livro por Título', ()=>{
        const livro = {id: 1, titulo: 'Livro 1', emprestado: false, idMembro: null};
        biblioteca.adicionarLivro(livro);
        const resultadoBusca = biblioteca.buscarLivroPorTitulo('Livro 1');
        expect(resultadoBusca).toContain(livro)
    });

    test('Deve listar todos os livros', ()=>{
        const livro = {id: 1, titulo: 'Livro 1', emprestado: false, idMembro: null};
        const livro2 = {id: 2, titulo: 'Livro 2', emprestado: false, idMembro: null};
        biblioteca.adicionarLivro(livro);
        biblioteca.adicionarLivro(livro2);
        const resultadoBusca = biblioteca.listarLivros();
        expect(resultadoBusca).toContain(livro,livro2);
    });

    test('Deve adicionar um membro', ()=>{
        const membro = {id: 1};
        biblioteca.adicionarMembro(membro);
        expect(biblioteca.membros).toContain(membro);
    });

    test('Deve remover um membro', ()=>{
        const membro = {id: 1};
        biblioteca.adicionarMembro(membro);
        biblioteca.removerMembro(1);
        expect(biblioteca.membros).not.toContain(membro);
    });

    test('Deve buscar um membro por Id', ()=>{
        const membro = {id: 1};
        biblioteca.adicionarMembro(membro);
        const resultadoBusca = biblioteca.buscarMembroPorId(1);
        expect(resultadoBusca).toBe(membro)
    });

    test('Deve listar todos os membros', ()=>{
        const membro = {id: 1};
        const membro2 = {id: 2};
        biblioteca.adicionarMembro(membro);
        biblioteca.adicionarMembro(membro2);
        const resultadoBusca = biblioteca.listarMembros();
        expect(resultadoBusca).toContain(membro,membro2);
    });

    test('Deve emprestar o livro disponivel', ()=>{
        const membro = {id: 1};
        const livro = {id: 1, titulo: 'Livro 1', emprestado: false, idMembro: null};
        biblioteca.adicionarMembro(membro);
        biblioteca.adicionarLivro(livro);
        const resultadoBusca = biblioteca.emprestarLivro(livro.id,membro.id);
        expect(resultadoBusca).toBe(true);
    });

    test('Deve não emprestar o livro indisponivel', ()=>{
        const membro = {id: 1};
        const livro = {id: 1, titulo: 'Livro 1', emprestado: true, idMembro: null};
        biblioteca.adicionarMembro(membro);
        biblioteca.adicionarLivro(livro);
        const resultadoBusca = biblioteca.emprestarLivro(livro.id,membro.id);
        expect(resultadoBusca).toBe(false);
    });

    test('Deve devolver o livro emprestado', ()=>{
        const livro = {id: 1, titulo: 'Livro 1', emprestado: true, idMembro: null};
        biblioteca.adicionarLivro(livro);
        const resultadoBusca = biblioteca.devolverLivro(livro.id);
        expect(resultadoBusca).toBe(true);
    });

    test('Deve não devolver o livro não emprestado', ()=>{
        const livro = {id: 1, titulo: 'Livro 1', emprestado: false, idMembro: null};
        biblioteca.adicionarLivro(livro);
        const resultadoBusca = biblioteca.devolverLivro(livro.id);
        expect(resultadoBusca).toBe(false);
    });

    test('Deve retornar os livros emprestados', ()=>{
        const livro = {id: 1, titulo: 'Livro 1', emprestado: false, idMembro: null};
        const livro2 = {id: 2, titulo: 'Livro 2', emprestado: true, idMembro: null};
        biblioteca.adicionarLivro(livro);
        biblioteca.adicionarLivro(livro2);
        const resultadoBusca = biblioteca.listarLivrosEmprestados();
        expect(resultadoBusca).toContain(livro2)
    });

    test('Deve retornar os livros disponiveis', ()=>{
        const livro = {id: 1, titulo: 'Livro 1', emprestado: false, idMembro: null};
        const livro2 = {id: 2, titulo: 'Livro 2', emprestado: true, idMembro: null};
        biblioteca.adicionarLivro(livro);
        biblioteca.adicionarLivro(livro2);
        const resultadoBusca = biblioteca.listarLivrosDisponiveis();
        expect(resultadoBusca).toContain(livro);
    });

    test('Deve contar todos os livros', ()=>{
        const livro = {id: 1, titulo: 'Livro 1', emprestado: false, idMembro: null};
        const livro2 = {id: 2, titulo: 'Livro 2', emprestado: true, idMembro: null};
        biblioteca.adicionarLivro(livro);
        biblioteca.adicionarLivro(livro2);
        const resultadoBusca = biblioteca.contarLivros();
        expect(resultadoBusca).toBe(2);
    });

    test('Deve contar todos os membros',()=>{
        const membro = {id: 1};
        const membro2 = {id: 2};
        biblioteca.adicionarMembro(membro);
        biblioteca.adicionarMembro(membro2);
        const resultadoBusca = biblioteca.contarMembros();
        expect(resultadoBusca).toBe(2);
    });

    test('Deve listar os livros por autor', ()=>{
        const livro = {id: 1, titulo: 'Livro 1', autor: 'Leandro Ugioni'};
        const livro2 = {id: 2, titulo: 'Livro 2', autor: 'Filipe Milaneze'};
        const livro3 = {id: 3, titulo: 'Livro 3', autor: 'Filipe Milaneze'};
        biblioteca.adicionarLivro(livro);
        biblioteca.adicionarLivro(livro2);
        const resultadoBusca = biblioteca.listarLivrosPorAutor('Filipe Milaneze');
        expect(resultadoBusca).toContain(livro2,livro3)
    });

    test('Deve listar os livros por autor', ()=>{
        const livro = {id: 1, titulo: 'Livro 1', genero: 'Filosofia'};
        const livro2 = {id: 2, titulo: 'Livro 2', genero: 'Romance'};
        const livro3 = {id: 3, titulo: 'Livro 3', genero: 'Romance'};
        biblioteca.adicionarLivro(livro);
        biblioteca.adicionarLivro(livro2);
        biblioteca.adicionarLivro(livro3);
        const resultadoBusca = biblioteca.listarLivrosPorGenero('Romance');
        expect(resultadoBusca).toContain(livro2,livro3)
    });

    test('Deve atualizar os dados de um livro', ()=>{
        const livro = {id: 1, titulo: 'Livro 1', genero: 'Filosofia'};
        biblioteca.adicionarLivro(livro);
        const novosDados = {id: 1, titulo: 'Livro 1', genero: 'Romance'};
        const novoLivro = biblioteca.atualizarInformacaoLivro(1,novosDados);
        const resultadoBusca = biblioteca.buscarLivroPorId(1);
        expect(resultadoBusca.genero).toBe('Romance')
    });

    test('Deve listar os livros por ano', ()=>{
        const livro = {id: 1, titulo: 'Livro 1', ano: '2015'};
        const livro2 = {id: 2, titulo: 'Livro 2', ano: '2016'};
        const livro3 = {id: 3, titulo: 'Livro 3', ano: '2016'};
        biblioteca.adicionarLivro(livro);
        biblioteca.adicionarLivro(livro2);
        biblioteca.adicionarLivro(livro3);
        const resultadoBusca = biblioteca.listarLivrosPorAno('2016');
        expect(resultadoBusca).toContain(livro2,livro3);
    });
})