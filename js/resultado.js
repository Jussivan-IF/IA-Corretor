// Após calcular a nota
const studentName = "Alfredo Silva dos Santos";
const score = 8.5;
localStorage.setItem('studentName', studentName);
localStorage.setItem('studentScore', score);


document.addEventListener('DOMContentLoaded', function () {
    const studentName = localStorage.getItem('studentName');
    const studentScore = localStorage.getItem('studentScore');

    document.getElementById('studentName').textContent = studentName;
    document.getElementById('studentScore').textContent = studentScore;
    document.getElementById('accuracyPercentage').textContent = studentScore;
});
