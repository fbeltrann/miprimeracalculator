<script>
const screen = document.querySelector('.screen');
const buttons = Array.from(document.querySelectorAll('.button'));
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const modeButton = document.getElementById('mode');

let currentExpression = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === '=') {
      evaluateExpression();
    } else if (button.textContent === 'C') {
      clearScreen();
    } else if (button.textContent === 'Del') {
      deleteLastCharacter();
    } else if (button.textContent === 'Modo') {
      toggleDarkMode();
    } else {
      addToExpression(button.textContent);
    }
  });
});

function addToExpression(value) {
  currentExpression += value;
  updateScreen();
}

function clearScreen() {
  currentExpression = '';
  updateScreen();
}

function deleteLastCharacter() {
  currentExpression = currentExpression.slice(0, -1);
  updateScreen();
}

function evaluateExpression() {
  try {
    const result = eval(currentExpression);
    currentExpression = result.toString();
    updateScreen();
  } catch (error) {
    screen.textContent = 'Error';
  }
}

function updateScreen() {
  screen.textContent = currentExpression;
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
</script>