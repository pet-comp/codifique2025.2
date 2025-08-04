const categorias = ["Cor", "Linguagem", "Curso", "Filme favorito", "Jogo favorito"];
const opcoes = {
    Cor: ["Vermelha", "Verde", "Roxa", "Amarela", "Azul"],
    Linguagem: ["Python", "C", "JavaScript", "PHP", "Assembly"],
    Curso: ["Computação", "Biologia", "Educação Física", "Matemática", "História"],
    "Filme favorito": ["Karatê Kid", "Shrek", "Velozes e Furiosos", "Pokémon", "Monster High"],
    "Jogo favorito": ["Minecraft", "Stardew Valley", "Celeste", "Roblox", "Zelda"]
};

// Função para salvar o estado atual do jogo no localStorage
function salvarProgresso() {
    const casas = categoriasNormais();
    localStorage.setItem("progressoJogoEinstein", JSON.stringify(casas));
    console.log("Progresso salvo automaticamente!");
}

function carregarProgresso() {
    const progressoSalvo = localStorage.getItem("progressoJogoEinstein");
    if (progressoSalvo) {
        const casasSalvas = JSON.parse(progressoSalvo);
        
        const tabela = document.querySelector("table");
        if (!tabela) return;

        for (let col = 0; col < casasSalvas.length; col++) {
            const casaSalva = casasSalvas[col];
            const colunaDaTabela = col + 1; // Colunas de 1 a 5

            for (let row = 0; row < categorias.length; row++) {
                const categoria = categorias[row];
                const select = tabela.rows[row].cells[colunaDaTabela].querySelector("select");
                
                if (select && casaSalva[categoria]) {
                    select.value = casaSalva[categoria];
                }
            }
        }
        console.log("Progresso carregado!");

        // Atualizar a cor da coluna após carregar
        for (let col = 1; col < tabela.rows[0].cells.length; col++) {
            const selectCor = tabela.rows[0].cells[col].querySelector("select");
            if (selectCor) {
                pintarColuna(col, selectCor.value);
            }
        }
    }
}

function criarTabela() {
    const container = document.getElementById("tabela-container");
    const table = document.createElement("table");

    for (let i = 0; i < categorias.length; i++) {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        th.textContent = categorias[i];
        tr.appendChild(th);

        for (let j = 0; j < 5; j++) {
            const td = document.createElement("td");
            const select = document.createElement("select");

            const defaultOption = document.createElement("option");
            defaultOption.value = "";
            defaultOption.textContent = " ";
            select.appendChild(defaultOption);

            opcoes[categorias[i]].forEach(opt => {
                const option = document.createElement("option");
                option.value = opt;
                option.textContent = opt;
                select.appendChild(option);
            });

            if (categorias[i] === "Cor") {
                select.addEventListener("change", () => pintarColuna(j + 1, select.value));
            }

            select.addEventListener("change", salvarProgresso);

            td.appendChild(select);
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    container.appendChild(table);
}

function pintarColuna(coluna, cor) {
    const tabela = document.querySelector("table");
    
    const mapeamentoCores = {
        "vermelha": "#ce4848ff",   // Rosa claro (quase coral)
        "verde": "#94ce85ff",      // Verde maçã
        "roxa": "#ad6fcaff",       // Lilás um pouco mais forte
        "amarela": "#f0db75ff",    // Amarelo pastel
        "azul": "#799dd7ff"       // Azul claro vibrante
    };

    const corDeFundoPadrao = '#f8f9fa';

    let corDeFundo;

    const corNormalizada = cor.toLowerCase();

    if (cor === "null" || cor === "") {
        corDeFundo = corDeFundoPadrao;
    } else {
        corDeFundo = mapeamentoCores[corNormalizada] || corDeFundoPadrao;
    }

    for (let i = 0; i < tabela.rows.length; i++) {
        const celula = tabela.rows[i].cells[coluna];
        if (celula) {
            celula.style.backgroundColor = corDeFundo;
        }
    }
}

function categoriasNormais() {
    const tabela = document.querySelector("table");
    const casas = [];

    for (let col = 1; col < tabela.rows[0].cells.length; col++) {
        const casa = {};
        for (let row = 0; row < categorias.length; row++) {
            const categoria = categorias[row];
            const select = tabela.rows[row].cells[col].querySelector("select");
            if (select) {
                casa[categoria] = select.value;
            }
        }
        casas.push(casa);
    }

    return casas;
}

function verificarTabelaCompleta(casas) {
    for (const casa of casas) {
        for (const categoria in casa) {
            // A sua opção padrão vazia tem o valor ""
            if (casa[categoria] === "") {
                return false;
            }
        }
    }
    return true;
}


function verificar(casas) {
    const erros = [];

    const corCasa = cor => casas.findIndex(c => c.Cor === cor);
    const linguagemCasa = lang => casas.findIndex(c => c.Linguagem === lang);
    const cursoCasa = curso => casas.findIndex(c => c.Curso === curso);
    const jogoCasa = jogo => casas.findIndex(c => c["Jogo favorito"] === jogo);
    const filmeCasa = filme => casas.findIndex(c => c["Filme favorito"] === filme);

    if (!verificarTabelaCompleta(casas)) {
        document.getElementById("resultado").innerHTML = "❌ Preencha todas as células da tabela antes de verificar.";
        document.getElementById("resultado").style.color = "red";
        return; // Sai da função para não executar as outras verificações
    }

    // Validação para verificar se todas as células são distintas
    for (const categoria of categorias) {
        const valoresUnicos = new Set();
        let possuiDuplicatas = false;
        
        for (const casa of casas) {
            if (valoresUnicos.has(casa[categoria])) {
                possuiDuplicatas = true;
                break;
            }
            valoresUnicos.add(casa[categoria]);
        }

        if (possuiDuplicatas) {
            erros.push(`A categoria "${categoria}" possui valores duplicados. Todas as opções devem ser distintas.`);
        }
    }

    // Se houver erros de duplicação, exibe-os e interrompe
    if (erros.length > 0) {
        document.getElementById("resultado").innerHTML = erros.map(e => `❌ ${e}`).join("<br>");
        document.getElementById("resultado").style.color = "red";
        return;
    }
    
    // Dica 1: A linguagem PHP vive na casa vermelha.
    if (linguagemCasa("PHP") !== corCasa("Vermelha")) {
        erros.push("A linguagem PHP não está na casa vermelha.");
    }
    
    // Dica 2: A linguagem Assembly já coletou todos os morangos de Celeste.
    if (linguagemCasa("Assembly") !== jogoCasa("Celeste")) {
        erros.push("Assembly não está jogando Celeste.");
    }

    // Dica 3: A linguagem JavaScript já foi quase presa por assistir Velozes e furiosos...
    if (linguagemCasa("JavaScript") !== filmeCasa("Velozes e Furiosos")) {
        erros.push("JavaScript não está assistindo Velozes e Furiosos.");
    }

    // Dica 4: A casa verde fica imediatamente à esquerda da casa roxa.
    if (corCasa("Verde") !== corCasa("Roxa") - 1) {
        erros.push("A casa verde não está imediatamente à esquerda da casa roxa.");
    }

    // Dica 5: O dono da casa verde assiste Karatê Kid e depois fica tentando golpear o vento.
    if (filmeCasa("Karatê Kid") !== corCasa("Verde")) {
        erros.push("O dono da casa verde não assiste Karatê Kid.");
    }

    // Dica 6: A linguagem que cursa Educação Física ... Stardew Valley.
    if (cursoCasa("Educação Física") !== jogoCasa("Stardew Valley")) {
        erros.push("Quem cursa Educação Física não joga Stardew Valley.");
    }

    // Dica 7: O dono da casa amarela cursa Biologia.
    if (corCasa("Amarela") !== cursoCasa("Biologia")) {
        erros.push("O dono da casa amarela não cursa Biologia.");
    }

    // Dica 8: A linguagem que vive na casa do centro assiste Shrek toda noite.
    if (filmeCasa("Shrek") !== 2) {
        erros.push("A casa do centro não está assistindo Shrek.");
    }

    // Dica 9: O Python vive na primeira casa.
    if (linguagemCasa("Python") !== 0) {
        erros.push("Python não está na primeira casa.");
    }

    // Dica 10: A linguagem que cursa História vive ao lado de quem joga Roblox.
    if (Math.abs(cursoCasa("História") - jogoCasa("Roblox")) !== 1) {
        erros.push("História não está ao lado de quem joga Roblox.");
    }

    // Dica 11: A linguagem que é viciada em Minecraft vive ao lado de quem cursa Biologia.
    if (Math.abs(jogoCasa("Minecraft") - cursoCasa("Biologia")) !== 1) {
        erros.push("Quem joga Minecraft não está ao lado de quem cursa Biologia.");
    }

    // Dica 12: A linguagem que cursa Matemática fica assistindo Pokémon enquanto faz contas.
    if (cursoCasa("Matemática") !== filmeCasa("Pokémon")) {
        erros.push("Quem cursa Matemática não assiste Pokémon.");
    }

    // Dica 13: A linguagem C cursa Ciência da Computação.
    if (linguagemCasa("C") !== cursoCasa("Computação")) {
        erros.push("A linguagem C não está cursando Computação.");
    }

    // Dica 14: O Python vive ao lado da casa azul.
    if (Math.abs(linguagemCasa("Python") - corCasa("Azul")) !== 1) {
        erros.push("A casa azul não está ao lado do Python.");
    }

    // Dica 15: A linguagem que cursa História tem um vizinho que assiste Monster High escondido.
    if (Math.abs(cursoCasa("História") - filmeCasa("Monster High")) !== 1) {
        erros.push("O vizinho de quem cursa História não assiste Monster High.");
    }
    
    const resultado = document.getElementById("resultado");
    if (erros.length === 0) {
        resultado.textContent = "Parabéns, O dígido que você procura é o 3";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = erros.map(e => `❌ ${e}`).join("<br>");
        resultado.style.color = "red";
    }
}

function mostrarDicas() {
    const dicas = [
        "A linguagem PHP vive na casa vermelha.",
        "A linguagem Assembly já coletou todos os morangos de Celeste.",
        "A linguagem JavaScript já foi quase presa por assistir Velozes e furiosos e depois ultrapassar o limite de velocidade achando que estava no filme.",
        "A casa verde fica imediatamente à esquerda da casa roxa.",
        "O dono da casa verde assiste Karatê Kid e depois fica tentando golpear o vento.",
        "A linguagem que cursa Educação Física fica treinando o dia todo enquanto cuida da sua casinha no Stardew Valley.",
        "O dono da casa amarela cursa Biologia.",
        "A linguagem que vive na casa do centro assiste Shrek toda noite.",
        "O Python vive na primeira casa.",
        "A linguagem que cursa História vive ao lado de quem joga Roblox.",
        "A linguagem que é viciada em Minecraft vive ao lado de quem cursa Biologia.",
        "A linguagem que cursa Matemática fica assistindo Pokémon enquanto faz contas.",
        "A linguagem C cursa Ciência da Computação.",
        "O Python vive ao lado da casa azul.",
        "A linguagem que cursa História tem um vizinho que assiste Monster High escondido."
    ];

    const dicasDiv = document.getElementById("dicas");
    dicasDiv.innerHTML = dicas.map(d => `💡 ${d}`).join("<br>");
}

document.addEventListener("DOMContentLoaded", () => {
    criarTabela();
    mostrarDicas();
    carregarProgresso();

    document.getElementById("verificarBtn").addEventListener("click", () => {
        const casas = categoriasNormais();
        verificar(casas);
    });
});