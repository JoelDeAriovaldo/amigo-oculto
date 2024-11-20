const twilioClient = require('../config/twilio');
const config = require('../config/config.json');

function enviarMensagem(sorteado, participante) {
    const mensagem = config.mensagem.replace('{{nome}}', sorteado.nome);

    twilioClient.messages.create({
        body: mensagem,
        to: participante.numero,
        from: process.env.TWILIO_PHONE_NUMBER
    })
        .then((message) => console.log(`Mensagem enviada para ${participante.nome}: ${message.sid}`))
        .catch((error) => console.error('Erro ao enviar mensagem:', error));
}

module.exports = { enviarMensagem };
