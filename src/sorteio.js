const fs = require('fs');

function realizarSorteio(participantes) {
    const sorteados = [];

    // Realiza o sorteio garantindo que ninguém tire a si mesmo
    participantes.forEach((participante, index) => {
        let sorteadoIndex;
        do {
            sorteadoIndex = Math.floor(Math.random() * participantes.length);
        } while (sorteadoIndex === index || sorteados.includes(sorteadoIndex));  // Não pode tirar a si mesmo

        sorteados.push({ amigoOculto: participantes[sorteadoIndex], participante: participante });
    });

    return sorteados;
}

function carregarParticipantes() {
    const data = fs.readFileSync('./data/participantes.json');
    return JSON.parse(data);
}

module.exports = { realizarSorteio, carregarParticipantes };
