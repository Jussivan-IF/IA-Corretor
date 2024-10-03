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

        // Gera questões e radio buttons para as alternativas corretas
        for (let i = 1; i <= numQuestions; i++) {
            // Cria um div para cada questão
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question");

            // Adiciona o título da questão
            const questionLabel = document.createElement("label");
            questionLabel.innerText = `Questão ${i}:`;
            questionDiv.appendChild(questionLabel);

            // Adiciona uma quebra de linha entre a questão e as opções
            questionDiv.appendChild(document.createElement("br"));

            // Gera radio buttons para as alternativas da questão
            for (let j = 1; j <= 5; j++) { // Supondo 5 alternativas (A, B, C, D, E)
                const radio = document.createElement("input");
                radio.type = "radio";
                radio.id = `q${i}-alt${j}`;
                radio.name = `q${i}`; // O name é o mesmo para que apenas um seja selecionado
                radio.value = `alt${j}`;

                const radioLabel = document.createElement("label");
                radioLabel.setAttribute("for", `q${i}-alt${j}`);
                radioLabel.innerText = `Alternativa ${j}`;

                // Adiciona o radio e o label ao div da questão
                questionDiv.appendChild(radio);
                questionDiv.appendChild(radioLabel);

                // Adiciona uma quebra de linha após cada alternativa
                questionDiv.appendChild(document.createElement("br"));
            }

            // Adiciona o div da questão ao container de questões
            questionsContainer.appendChild(questionDiv);
        }
    });

    // Adiciona um listener para o botão de enviar a prova
    submitButton.addEventListener("click", function() {
        const numQuestions = parseInt(document.getElementById("numQuestions").value);
        let allAnswered = true;

        // Verifica se todas as questões têm uma resposta
        for (let i = 1; i <= numQuestions; i++) {
            const radios = document.getElementsByName(`q${i}`);
            const answered = Array.from(radios).some(radio => radio.checked);
            if (!answered) {
                allAnswered = false;
                break;
            }
        }

        // Atualiza a mensagem de status
        if (allAnswered) {
            statusMessage.innerText = "Prova enviada com sucesso!";
            statusMessage.style.color = "green"; // Mensagem de sucesso
        } else {
            statusMessage.innerText = "Por favor, preencha todas as questões.";
            statusMessage.style.color = "red"; // Mensagem de erro
        }
    });
});
