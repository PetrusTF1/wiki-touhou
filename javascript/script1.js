//BARRA DE PESQUISA
const serchwrapper = document.querySelector('.search');
const inputbox = serchwrapper.querySelector('input'); 
const sugestBox = serchwrapper.querySelector('.list');
const icon = serchwrapper.querySelector('.icon');
let linkTag = serchwrapper.querySelector('a');

// 1. Função para formatar o nome e ir para o seu HTML
function irParaPagina(nome) {
    if (nome) {
        // Pega o primeiro nome (Ex: "Reimu Hakurei" -> "Reimu")
        let primeiroNome = nome.split(" ")[0]; 
        // Garante a primeira letra maiúscula (Ex: "reimu" -> "Reimu")
        let nomeFormatado = primeiroNome.charAt(0).toUpperCase() + primeiroNome.slice(1).toLowerCase();
        
        // Redireciona para o arquivo na mesma pasta
        window.location.href = `./${nomeFormatado}.html`;
    }
}

// 2. Evento ao digitar no campo
inputbox.onkeyup = (e) => {
    let userData = e.target.value; 
    let emptyArray = [];

    // Se o usuário apertar ENTER
    if (e.key === 'Enter') {
        irParaPagina(userData);
        return; // Para a execução aqui
    }

    if (userData) {
        // FILTRAGEM: Busca no array 'sugestoes' (do seu outro arquivo)
        emptyArray = sugestoes.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });

        emptyArray = emptyArray.map((data) => {
            return `<li>${data}</li>`;
        });

        serchwrapper.classList.add("active");
        showSuggestions(emptyArray);

        // Adiciona evento de clique em cada item da lista gerada
        let allList = sugestBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].onclick = function() {
                let itemSelecionado = this.textContent;
                inputbox.value = itemSelecionado;
                irParaPagina(itemSelecionado);
            };
        }
    } else {
        serchwrapper.classList.remove("active");
    }
};

// 3. Função para mostrar as sugestões na tela
function showSuggestions(list) {
    let listData;
    if (!list.length) {
        let userValue = inputbox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    sugestBox.innerHTML = listData;
}

// 4. Lógica do clique na lupa (ícone)
icon.onclick = () => {
    irParaPagina(inputbox.value);
};