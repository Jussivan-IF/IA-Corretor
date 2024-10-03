document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generateQuestions");
    const questionsContainer = document.getElementById("questionsContainer");
    const submitButton = document.getElementById("submitExam");
    const statusMessage = document.getElementById("statusMessage");

    // Adiciona um listener para o botão de gerar questões
    generateButton.addEventListener("click", function() {
        // Limpa o container de questões toda vez que o botão é clicado
        questionsContainer.innerHTML = "";

        // Pega o número de questões
        const numQuestions = parseInt(document.getElementById("numQuestions").value);

        // Verifica se o número de questões é válido
        if (isNaN(numQuestions) || numQuestions <= 0) {
            alert("Por favor, insira um número válido de questões.");
            return;
        }

        // Gera questões e inputs de texto para as respostas esperadas
        for (let i = 1; i <= numQuestions; i++) {
            // Cria um div para cada questão
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question");

            // Adiciona o título da questão
            const questionLabel = document.createElement("label");
            questionLabel.innerText = `Questão ${i}:`;
            questionDiv.appendChild(questionLabel);

            // Adiciona uma quebra de linha entre a questão e a resposta
            questionDiv.appendChild(document.createElement("br"));

            // Cria um input de texto para a resposta esperada
            const answerInput = document.createElement("input");
            answerInput.type = "text";
            answerInput.id = `answer${i}`;
            answerInput.placeholder = "Resposta esperada para a questão";
            questionDiv.appendChild(answerInput);

            // Adiciona uma quebra de linha após cada input
            questionDiv.appendChild(document.createElement("br"));

            // Adiciona o div da questão ao container de questões
            questionsContainer.appendChild(questionDiv);
        }
    });

    // Adiciona um listener para o botão de enviar a prova
    submitButton.addEventListener("click", function() {
        const numQuestions = parseInt(document.getElementById("numQuestions").value);
        let allAnswered = true;

        // Verifica se todas as questões têm uma resposta esperada
        for (let i = 1; i <= numQuestions; i++) {
            const answer = document.getElementById(`answer${i}`).value.trim();
            if (!answer) {
                allAnswered = false;
                break;
            }
        }

        // Atualiza a mensagem de status
        if (allAnswered) {
            statusMessage.innerText = "Prova enviada com sucesso!";
            statusMessage.style.color = "green"; // Mensagem de sucesso

            setTimeout(function () {
                window.location.href = 'resultado.html'; // Altere para o caminho correto da página de resultados
            }, 5000);
        } else {
            statusMessage.innerText = "Por favor, preencha todas as questões.";
            statusMessage.style.color = "red"; // Mensagem de erro
        }
    });
});
