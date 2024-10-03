document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generateQuestions");
    const questionsContainer = document.getElementById("questionsContainer");
    const submitButton = document.getElementById("submitExam");
    const statusMessage = document.getElementById("statusMessage");

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

            setTimeout(function () {
                window.location.href = 'resultado.html';
            }, 5000);
        } else {
            statusMessage.innerText = "Por favor, preencha todas as questões.";
            statusMessage.style.color = "red";
        }
    });
});
