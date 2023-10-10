const table = document.getElementById("numberTable");
const result = document.getElementById("result");
const countSpan = document.getElementById("count");

// Час
let seconds = 0;
function updateTimer() {
  seconds++;
  document.getElementById("timer").innerHTML = seconds;
}
setInterval(updateTimer, 1000);


// Функція для генерації чисел випадковим чином в таблиці
function generateNumbers() {
    const numbers = Array.from({ length: 50 }, (_, i) => i + 1); // Масив від 1 до 50
    numbers.sort(() => Math.random() - 0.5); // Випадкове перемішування чисел

    for (let i = 0; i < 5; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 10; j++) {
            const cell = row.insertCell();
            const number = numbers[i * 10 + j];
            cell.textContent = number;
            cell.addEventListener("click", () => checkNumber(number));
        }
    }
}

// Функція для перевірки, чи знайдено число
let foundCount = 0;
function checkNumber(number) {
    if (number === foundCount + 1) {
        foundCount++;
        countSpan.textContent = foundCount;
        if (foundCount === 50) {
            alert("Перемога! Ваш час: "+ seconds + " секунд!");
            document.location.reload();
        }
    }
}


// Запускаємо гру після завантаження сторінки
window.addEventListener("load", generateNumbers);
