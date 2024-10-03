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

            for (let j = 1; j <= 5; j++) { 
                const radio = document.createElement("input");
                radio.type = "radio";
                radio.id = `q${i}-alt${j}`;
                radio.name = `q${i}`; 
                radio.value = `alt${j}`;

                const radioLabel = document.createElement("label");
                radioLabel.setAttribute("for", `q${i}-alt${j}`);
                radioLabel.innerText = `Alternativa ${j}`;

                questionDiv.appendChild(radio);
                questionDiv.appendChild(radioLabel);

                questionDiv.appendChild(document.createElement("br"));
            }

            questionsContainer.appendChild(questionDiv);
        }
    });
    submitButton.addEventListener("click", function() {
        const numQuestions = parseInt(document.getElementById("numQuestions").value);
        let allAnswered = true;
        for (let i = 1; i <= numQuestions; i++) {
            const radios = document.getElementsByName(`q${i}`);
            const answered = Array.from(radios).some(radio => radio.checked);
            if (!answered) {
                allAnswered = false;
                break;
            }
        }

        if (allAnswered) {
            statusMessage.innerText = "Prova enviada com sucesso!";
            statusMessage.style.color = "green";
        } else {
            statusMessage.innerText = "Por favor, preencha todas as questões.";
            statusMessage.style.color = "red";
        }
    });
});
