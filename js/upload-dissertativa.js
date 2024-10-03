document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generateQuestions");
    const questionsContainer = document.getElementById("questionsContainer");
    const submitButton = document.getElementById("submitExam");
    const statusMessage = document.getElementById("statusMessage");

    // Criação da barra de carregamento
    const loadingBar = document.createElement("div");
    loadingBar.id = "loadingBar";
    loadingBar.style.width = "0%";
    loadingBar.style.height = "20px";
    loadingBar.style.backgroundColor = "green";
    loadingBar.style.display = "none"; // Inicialmente escondida
    document.body.appendChild(loadingBar);

    generateButton.addEventListener("click", function() {
        questionsContainer.innerHTML = "";

        const numQuestions = parseInt(document.getElementById("numQuestions").value);

        if (isNaN(numQuestions) || numQuestions <= 0) {
            alert("Por favor, insira um número válido de questões.");
            return;
        }

        for (let i = 1; i <= numQuestions; i++) {
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question");

            const questionLabel = document.createElement("label");
            questionLabel.innerText = `Questão ${i}:`;
            questionDiv.appendChild(questionLabel);

            questionDiv.appendChild(document.createElement("br"));

            // Cria um input de texto para a resposta esperada
            const answerInput = document.createElement("input");
            answerInput.type = "text";
            answerInput.id = `answer${i}`;
            answerInput.placeholder = "Resposta esperada para a questão";
            questionDiv.appendChild(answerInput);

            questionDiv.appendChild(document.createElement("br"));

            questionsContainer.appendChild(questionDiv);
        }
    });

    submitButton.addEventListener("click", function() {
        const numQuestions = parseInt(document.getElementById("numQuestions").value);
        let allAnswered = true;

        for (let i = 1; i <= numQuestions; i++) {
            const answer = document.getElementById(`answer${i}`).value.trim();
            if (!answer) {
                allAnswered = false;
                break;
            }
        }

        if (allAnswered) {
            statusMessage.innerText = "Prova enviada com sucesso!";
            statusMessage.style.color = "green";

            // Mostra a barra de carregamento
            loadingBar.style.display = "block";
            let width = 0;

            const loadingInterval = setInterval(function() {
                if (width >= 100) {
                    clearInterval(loadingInterval);
                    window.location.href = 'resultado.html';
                } else {
                    width++;
                    loadingBar.style.width = width + "%";
                }
            }, 50); // Atualiza a barra a cada 50ms
        } else {
            statusMessage.innerText = "Por favor, preencha todas as questões.";
            statusMessage.style.color = "red";
        }
    });
});
