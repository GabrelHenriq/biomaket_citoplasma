// Seleciona elementos do DOM
const playButton = document.getElementById('playVideo');
const promoVideo = document.getElementById('promoVideo');

// Adiciona funcionalidade ao botão
playButton.addEventListener('click', () => {
    if (promoVideo.style.display === 'none' || promoVideo.style.display === '') {
        promoVideo.style.display = 'block'; // Exibe o vídeo
        playButton.textContent = 'Fechar o vídeo'; // Altera o texto do botão
    } else {
        promoVideo.style.display = 'none'; // Oculta o vídeo
        playButton.textContent = 'Aperte o play e descubra o segredo';
    }
});
