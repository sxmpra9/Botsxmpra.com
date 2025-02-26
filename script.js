let chatContent = document.getElementById('chat-content');

function displayMessage(message, sender) {
    let messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    chatContent.appendChild(messageDiv);
    scrollToChat();
}

function chooseOption(option) {
    let message = '';

    if (option === 'cursos') {
        message = 'Ótima escolha! Você quer saber os preços ou as opções de pagamento disponíveis?';
        displayMessage(message, 'bot');
        displayOptions(['Preços', 'Formas de pagamento', 'Outras informações sobre os cursos']);
    } else if (option === 'orcamento') {
        message = 'Você escolheu Orçamento! Que tipo de site você deseja?';
        displayMessage(message, 'bot');
        displayOptions(['Quero um site avançado', 'Quero um site simples']);
    } else if (option === 'hacker') {  
        message = 'Você escolheu a Área Hacker! Quer saber sobre cursos?';
        displayMessage(message, 'bot');
        displayOptions(['Sim, quero saber sobre os cursos de hacking', 'Não, quero outra informação']);
    }
}

function displayOptions(options) {
    let optionsDiv = document.createElement('div');
    optionsDiv.classList.add('options');
    options.forEach(option => {
        let optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.textContent = option;
        optionDiv.onclick = () => {
            processUserInput(option);
        };
        optionsDiv.appendChild(optionDiv);
    });
    chatContent.appendChild(optionsDiv);
    scrollToChat();
}

function processUserInput(input) {
    let response = '';

    if (input === 'Preços') {
        response = 'Os cursos disponíveis são: \n\nProgramação:\n- Programação Web - Básico → R$199\n- Programação Web - Avançado → R$290\n\nHacking:\n- Hacking - Básico → R$100\n- Hacking - Avançado → R$300\n\nFale comigo diretamente no WhatsApp https://wa.me/5511975748697';
    } else if (input === 'Formas de pagamento') {
        response = 'Aceitamos PIX, Cartão de Crédito (parcelado em até 3 vezes) e Boleto Bancário.';
    } else if (input === 'Outras informações sobre os cursos') {
        response = 'Nossos cursos atendem iniciantes e profissionais experientes. Para mais detalhes, fale comigo no WhatsApp: https://wa.me/5511975748697.';
    } else if (input === 'Quero um site avançado' || input === 'Quero um site simples') {
        response = 'Ótimo! Escolha o tipo de site que deseja:';
        displayMessage(response, 'bot');
        displayOptions([
            'Lojas virtuais (E-commerce)',
            'Institucionais',
            'Landing Pages',
            'Blogs ou Portais de Notícias',
            'Plataformas de cursos (EAD)',
            'Outros'
        ]);
        return;
    } else if (input === 'Sim, quero saber sobre os cursos de hacking') {
        response = 'Temos cursos de Hacking Básico e Avançado. Quer aprender sobre pentesting, invasão  de contas e de redes? Entre em contato no WhatsApp: https://wa.me/5511975748697';
    } else if (input === 'Não, quero outra informação') {
        response = 'Tudo bem! Me diga o que precisa saber ou fale diretamente comigo no WhatsApp: https://wa.me/5511975748697.';
    } else {
        switch (input) {
            case 'Lojas virtuais (E-commerce)':
                response = 'Sites para vender produtos com carrinho de compras, integração com pagamento e boa experiência de usuário. Fale comigo no WhatsApp: https://wa.me/5511975748697';
                break;
            case 'Institucionais':
                response = 'Sites profissionais para empresas apresentarem seus serviços. Fale comigo no WhatsApp: https://wa.me/5511975748697';
                break;
            case 'Landing Pages':
                response = 'Páginas simples para captar leads e divulgar lançamentos. Fale comigo no WhatsApp: https://wa.me/5511975748697';
                break;
            case 'Blogs ou Portais de Notícias':
                response = 'Para criação de conteúdo e geração de tráfego. Fale comigo no WhatsApp: https://wa.me/5511975748697';
                break;
            case 'Plataformas de cursos (EAD)':
                response = 'Plataformas como Hotmart, mas personalizadas para vender e gerenciar cursos. Fale comigo no WhatsApp: https://wa.me/5511975748697';
                break;
            case 'Outros':
                response = 'Fale comigo no WhatsApp para discutir seu projeto: https://wa.me/5511975748697';
                break;
        }
    }

    displayMessage(response, 'bot');
}

function scrollToChat() {
    chatContent.scrollIntoView({ behavior: 'smooth', block: 'end' });
}