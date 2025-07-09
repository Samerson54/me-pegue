document.querySelector('.catch-me-btn').addEventListener('click', function() {
            alert('Você me pegou!');
        });

//mudar cor de fundo
function mudarCor() {
    const cores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
}