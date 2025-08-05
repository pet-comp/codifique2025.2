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

Basta acessar ["este link"](https://pet-comp.github.io/codifique2025.2/DesafioDoEinstein/).
Alternativamente, é possível rodá-lo localmente ao baixar o projeto e abrir o arquivo `index.html` em seu navegador de preferência.

## Tutorial de Resolução do Desafio

A seguir, disponibilizamos um passo-a-passo de como resolver o desafio logicamente:

1 - Pela dica 9, sabemos que quem programa em Python vive na primeira casa.
2 - Pela dica 8, sabemos que quem gosta de Shrek vive na casa do centro.
3 - Pela dica 14, sabemos que a casa azul fica ao lado da de quem programa em Python. Como a casa é a primeira, então a casa azul é a segunda.
4 - Pela dica 4, sabemos que a casa verde fica à esquerda da casa roxa. Já sabemos que a casa verde não é a segunda. A casa verde também não pode ser a primeira, já que, nesse caso, a segunda casa seria roxa (mas ela é azul). Também não pode ser a casa 5, visto que, nesse caso, não haveria nenhuma casa à esquerda dessa. Portanto, a casa verde só pode ser a casa 3 ou 4.
5 - Pela dica 5, sabemos que quem vive na casa verde gosta de Karate Kid. Sabemos que a casa verde pode ser a casa 3 ou 4. Como já sabemos que quem vive na casa 3 gosta de Shrek, então a casa verde é a 4.
6 - Pela dica 6, sabemos que quem mora na casa verde assiste Karate Kid. Como a casa verde é a 4, então quem mora na casa 4 assiste Karate Kid.
7 - Pela dica 4, a casa roxa é a casa 5.
8 - Pela dica 1, sabemos que quem vive na casa vermelha programa em PHP. As casas cujas cores ainda não sabemos são as casas 1 e 3. Porém, quem vive na casa 1 programa em Python. Portanto, a casa vermelha é a casa 3.
9 - Pela dica 1, quem vive na casa vermelha programa em PHP. Portanto, quem programa nessa linguagem vive na casa 3. 
10 - Por eliminatória, a casa amarela é a casa 1.
11 - Pela dica 7, sabemos que quem vive na casa amarela cursa Biologia. Sabemos que a casa amarela é a casa 1. Portanto, quem cursa Biologia vive na casa 1.
12 - Pela dica 11, sabemos que quem joga Minecraft vive ao lado de quem cursa Biologia. Como quem cursa Biologia vive na primeira casa, a única casa possível para quem joga Minecraft é a 2.
13 - Pela dica 3, sabemos que quem programa em JavaScript gosta de Velozes e Furiosos. Sabemos que quem vive na casa 1 não programa em JavaScript e que quem vive nas casas 3 e 4 não gosta de Velozes e Furiosos. Portanto, quem gosta desse filme só pode viver nas casas 2 ou 5.
14 - Pela dica 12, sabemos que quem cursa Matemática gosta de Pokémon. Sabemos que quem mora na casa 1 não cursa Matemática e que quem vive nas casas 3 e 4 não gosta de Pokémon. Portanto, quem gosta desse filme só pode viver nas casas 2 ou 5.
15 - Como existem 2 opções para as casas 2 e 5 (Pokémon e Velozes e Furiosos), então quem mora na casa 1 obrigatoriamente precisa gostar de Monster High.
16 - Pela dica 15, sabemos que quem cursa História possui um vizinho que gosta de Monster High. Quem assiste esse filme só possui um vizinho: a casa 2. Portanto, quem vive na casa 2 cursa História.
17 - Pela dica 12, sabemos que quem cursa Matemática assiste Pokémon. Para essa pessoa, as únicas possibilidades são as casas 2 ou 5. Porém, quem vive na casa 2 cursa História. Portanto, essa pessoa mora na casa 5.
18 - Por eliminatória, quem vive na casa 2 assiste Velozes e Furiosos.
19 - Pela dica 3, quem programa em JavaScript gosta de Velozes e Furiosos. Como quem gosta desse filme mora na casa 2, então quem programa nessa linguagem vive na casa 2.
20 - Pela dica 13, quem programa em C cursa Ciências de Computação. Ainda não sabemos quais linguagens de programação as pessoas que moram nas casas 4 e 5 usam, porém sabemos que quem mora na casa 5 cursa Matemática. Portanto, quem vive na casa 4 cursa Computação e programa em C.
21 - Por eliminatória, quem mora na casa 5 programa em Assembly.
22 - Por eliminatória, quem mora na casa 3 cursa Educação Física.
23 - Pela dica 2, quem programa em Assembly joga Celeste. Portanto, quem joga Celeste mora na casa 5.
24 - Pela dica 6, quem cursa Educação Física joga Stardew Valley. Portanto, quem joga esse jogo mora na casa 3.
25 - Pela dica 10, quem cursa História mora ao lado de quem joga Roblox. Apenas uma pessoa vizinha de quem cursa História não tem seu jogo definido: a casa 1. Portanto, quem mora nessa casa joga Roblox.
26 - Por eliminatória, quem joga Zelda mora na casa 4.