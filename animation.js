const titleElement = document.getElementById('animated-title');
const titleText = titleElement.textContent;
titleElement.textContent = ''; // Limpa o texto inicialmente

let index = 0;

function typeWriter() {
    if (index < titleText.length) {
        titleElement.textContent += titleText.charAt(index);
        index++;
    } else {
        index = 0; // Reinicia a animação
        titleElement.textContent = ''; // Limpa o texto para reiniciar
    }
}

setInterval(typeWriter, 150); // Intervalo de 150ms para cada letra
