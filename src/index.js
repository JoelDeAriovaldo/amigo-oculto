require('dotenv').config();

const { carregarParticipantes, realizarSorteio } = require('./sorteio');
const { enviarMensagem } = require('./envioSMS');

const participantes = carregarParticipantes();
const sorteios = realizarSorteio(participantes);

sorteios.forEach(({ participante, amigoOculto }) => {
    enviarMensagem(amigoOculto, participante);
});