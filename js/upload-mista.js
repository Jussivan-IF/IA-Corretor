document.addEventListener("DOMContentLoaded", function() {
    const generateDissertativasButton = document.getElementById("generateDissertativas");
    const dissertativasContainer = document.getElementById("dissertativasContainer");
    const generateObjetivasButton = document.getElementById("generateObjetivas");
    const objetivasContainer = document.getElementById("objetivasContainer");
    const submitButton = document.getElementById("submitExam");
    const statusMessage = document.getElementById("statusMessage");

    // Adiciona um listener para o botão de gerar questões dissertativas
    generateDissertativasButton.addEventListener("click", function() {
        dissertativasContainer.innerHTML = "";
        const numQuestionsDissertativas = parseInt(document.getElementById("numQuestionsDissertativas").value);
        if (isNaN(numQuestionsDissertativas) || numQuestionsDissertativas <= 0) {
            alert("Por favor, insira um número válido de questões dissertativas.");
            return;
        }
        for (let i = 1; i <= numQuestionsDissertativas; i++) {
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question");
            const questionLabel = document.createElement("label");
            questionLabel.innerText = `Questão Dissertativa ${i}:`;
            questionDiv.appendChild(questionLabel);
            questionDiv.appendChild(document.createElement("br"));
            const answerInput = document.createElement("input");
            answerInput.type = "text";
            answerInput.id = `answerDissertativa${i}`;
            answerInput.placeholder = "Resposta esperada para a questão dissertativa";
            questionDiv.appendChild(answerInput);
            questionDiv.appendChild(document.createElement("br"));
            dissertativasContainer.appendChild(questionDiv);
        }
    });

    // Adiciona um listener para o botão de gerar questões objetivas
    generateObjetivasButton.addEventListener("click", function() {
        objetivasContainer.innerHTML = "";
        const numQuestionsObjetivas = parseInt(document.getElementById("numQuestionsObjetivas").value);
        if (isNaN(numQuestionsObjetivas) || numQuestionsObjetivas <= 0) {
            alert("Por favor, insira um número válido de questões objetivas.");
            return;
        }
        for (let i = 1; i <= numQuestionsObjetivas; i++) {
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question");
            const questionLabel = document.createElement("label");
            questionLabel.innerText = `Questão Objetiva ${i}:`;
            questionDiv.appendChild(questionLabel);
            questionDiv.appendChild(document.createElement("br"));
            const radioContainer = document.createElement("div");
            radioContainer.classList.add("radio-container");

            for (let j = 1; j <= 5; j++) { // Supondo 5 alternativas
                const radio = document.createElement("input");
                radio.type = "radio";
                radio.id = `q${i}-alt${j}`;
                radio.name = `q${i}`;
                radio.value = `alt${j}`;
                const radioLabel = document.createElement("label");
                radioLabel.setAttribute("for", `q${i}-alt${j}`);
                radioLabel.innerText = `Alternativa ${j}`;
                radioContainer.appendChild(radio);
                radioContainer.appendChild(radioLabel);
            }
            questionDiv.appendChild(radioContainer);
            objetivasContainer.appendChild(questionDiv);
        }
    });

    // Adiciona um listener para o botão de enviar a prova
    submitButton.addEventListener("click", function() {
        const numQuestionsDissertativas = parseInt(document.getElementById("numQuestionsDissertativas").value);
        const numQuestionsObjetivas = parseInt(document.getElementById("numQuestionsObjetivas").value);
        
        let allAnsweredDissertativas = true;
        let allAnsweredObjetivas = true;

        for (let i = 1; i <= numQuestionsDissertativas; i++) {
            const answer = document.getElementById(`answerDissertativa${i}`).value.trim();
            if (!answer) {
                allAnsweredDissertativas = false;
                break;
            }
        }

        for (let i = 1; i <= numQuestionsObjetivas; i++) {
            const radios = document.getElementsByName(`q${i}`);
            const answered = Array.from(radios).some(radio => radio.checked);
            if (!answered) {
                allAnsweredObjetivas = false;
                break;
            }
        }

        if (allAnsweredDissertativas && allAnsweredObjetivas) {
            statusMessage.innerText = "Prova enviada com sucesso!";
            statusMessage.style.color = "green";
        } else {
            statusMessage.innerText = "Por favor, preencha todas as questões.";
            statusMessage.style.color = "red";
        }
    });
});
