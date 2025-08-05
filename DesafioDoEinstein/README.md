# Desafio de lógica - Escape Room

Este é um jogo de lógica web inspirado no ["Desafio de Einstein"](https://rachacuca.com.br/logica/problemas/teste-de-einstein/), onde o objetivo é preencher uma tabela de 5x5 de acordo com uma série de dicas. O projeto foi desenvolvido utilizando HTML, CSS e JavaScript puro para criar uma experiência interativa e visualmente agradável.

Este projeto é um dos desafios da Escape Room do Codifique de 2025.2, para saber mais sobre ela acesse o [docs](https://docs.google.com/document/d/1eWqgaqPjnLk0gEtTzHVwTaL9DeAk0pMRG_xV5WEWcsU/edit?usp=sharing0)

## Funcionalidades

    Tabela Interativa: Uma tabela 5x5 gerada dinamicamente com dropdowns (<select>) em cada célula para que o usuário possa selecionar as opções.

    Dicas: Uma seção dedicada exibe todas as 15 dicas necessárias para resolver o desafio.

    Validação Completa: Ao clicar no botão "Verificar", o jogo executa uma série de validações:

        Células Preenchidas: Verifica se todas as células da tabela foram preenchidas. Caso contrário, exibe uma mensagem de erro.

        Valores Distintos: Garante que não haja valores duplicados em nenhuma das categorias (linhas da tabela).

        Lógica das Dicas: Valida se as seleções do usuário estão corretas de acordo com as 15 dicas fornecidas.

    Feedback Visual:

        Cores nas Colunas: A coluna de cores permite que o usuário pinte as colunas da tabela com tons pastéis, proporcionando uma ajuda visual para a organização do pensamento.

        Mensagens de Erro/Sucesso: O feedback da verificação é exibido em vermelho (com ❌) para erros ou em verde para o sucesso, com mensagens claras e diretas.

    Salvar Progresso Automático: Utiliza o localStorage do navegador para salvar o progresso do usuário a cada alteração. Isso permite que o jogo seja retomado exatamente de onde parou, mesmo após a página ser fechada.

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

    index.html: Contém a estrutura básica da página, incluindo a tabela, a seção de dicas e o botão de verificação. Ele faz a ligação com os arquivos style.css e script.js.

    style.css: Define a estilização da página. Cores, fontes, layout e o design responsivo estão todos configurados aqui para uma experiência de usuário agradável. As cores das colunas de categoria e do título do jogo são definidas neste arquivo.

    script.js: Contém toda a lógica do jogo. É responsável por:

        Gerar a tabela e preencher os dropdowns.

        Capturar as interações do usuário.

        Implementar todas as validações de lógica e distinct.

        Gerenciar o salvamento e carregamento de progresso usando localStorage.

        Lidar com a coloração das colunas da tabela.

## Como Executar o Projeto

Basta abrir o arquivo index.html em qualquer navegador web moderno para começar a jogar. Não é necessário nenhum servidor ou configuração adicional.
