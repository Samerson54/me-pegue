document.querySelector('.catch-me-btn').addEventListener('click', function() {
            alert('Você me pegou!');
        });

//mudar cor de fundo
function mudarCor() {
    const cores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
}

let contador = 0;

const contadorElement = document.getElementById('contador');

document.querySelector('body').addEventListener('click', function() {
    contador++;
    contadorElement.textContent = contador;
});

function moverBotao() {
    const maxTop = window.innerHeight - botao.offsetHeight;
    const maxLeft = window.innerWidth - botao.offsetWidth;
    const top = Math.random() * maxTop;
    const left = Math.random() * maxLeft;

    //tamanho aleatorio
    //entre 50px e 90px
    const tamanho = 50 + Math.random() * 40; // tamanho entre 50px e 90px

    botao.style.top = top + 'px';
    botao.style.left = left + 'px';
    botao.style.width = tamanho + 'px';
    botao.style.height = tamanho + 'px';
}

// detectar movimento do mouse
window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const react = botao.getBoundingClientRect();
    const botaoX = react.left + react.width / 2;
    const botaoY = react.top + react.height / 2;

    // calcular a distância entre o mouse e o botão
    const distanciaX = mouseX - botaoX;
    const distanciaY = mouseY - botaoY;
    const distancia = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);

    // se o mouse estiver perto do botão, mover o botão
    if (distancia < 100) {
        moverBotao();
    }
});