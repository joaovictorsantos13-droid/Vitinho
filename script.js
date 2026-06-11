function nextStep(step) {
    // Esconde todas as etapas
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    
    // Mostra a etapa atual
    document.getElementById('step' + step).classList.add('active');
    
    // Atualiza a barra de progresso (100% no passo 2)
    document.getElementById('progressBar').style.width = '100%';
}

function prevStep(step) {
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    document.getElementById('step' + step).classList.add('active');
    
    // Volta a barra para 50%
    document.getElementById('progressBar').style.width = '50%';
}

function calculateResult() {
    let score = 0;
    
    // Pega as respostas marcadas
    const solo = document.querySelector('input[name="solo"]:checked');
    const energia = document.querySelector('input[name="energia"]:checked');

    // Validação simples (garante que o usuário respondeu tudo)
    if (!solo || !energia) {
        alert("Por favor, responda todas as perguntas antes de calcular!");
        return;
    }

    // Soma dos pontos
    if (solo.value === "direto") score += 50;
    if (energia.value === "solar") score += 50;

    // Transição para a tela de resultados
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    document.getElementById('resultStep').classList.add('active');

    // Exibe o veredito baseado nos pontos
    const resultValue = document.getElementById('resultValue');
    const resultText = document.getElementById('resultText');

    if (score === 100) {
        resultValue.innerText = "Fazenda do Futuro 🌱";
        resultText.innerText = "Excelente! Sua propriedade atinge o equilíbrio perfeito entre produção forte e respeito máximo ao meio ambiente.";
    } else if (score === 50) {
        resultValue.innerText = "Produtor em Evolução ⚙️";
        resultText.innerText = "Bom caminho! Você já aplica técnicas sustentáveis, mas ainda há espaço para melhorar a eficiência energética ou manejo do solo.";
    } else {
        resultValue.innerText = "Futuro em Alerta ⚠️";
        resultText.innerText = "Atenção. Pequenas mudanças tecnológicas e de manejo podem proteger seu solo e economizar muitos recursos. Vale a pena investir em inovação!";
    }
}

function restartForm() {
    // Limpa o formulário e reseta o estado original
    document.getElementById('agroForm').reset();
    document.getElementById('progressBar').style.width = '50%';
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    document.getElementById('step1').classList.add('active');
}
