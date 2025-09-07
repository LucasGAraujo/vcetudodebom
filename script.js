
const memories = [
    {
        id: 1, title: "O Teu Coração", x: 50, y: 90,
        audio: "audios/C1.mp3", text: "É o ponto de partida de tudo. O lugar mais gentil, puro e lindo que eu já tive a sorte de conhecer.",
        connectsTo: [2]
    },
    {
        id: 2, title: "O Teu Sorriso", x: 65, y: 82,
        audio: "audios/C2.mp3", text: "É como se o sol decidisse aparecer de repente no meio de um dia nublado. Ele tem o poder de iluminar tudo ao redor.",
        connectsTo: [3]
    },
    {
        id: 3, title: "Tua Inteligência", x: 78, y: 70,
        audio: "audios/C3.mp3", text: "O jeito que você pensa, cria e enxerga o mundo... me fascina e me inspira a ser mais curioso todos os dias.",
        connectsTo: [4]
    },
    {
        id: 4, title: "Tua Força", x: 86, y: 55,
        audio: "audios/C4.mp3", text: "Você enfrenta qualquer desafio com uma coragem que me deixa sem palavras. É a pessoa mais forte e resiliente que eu conheço.",
        connectsTo: [5]
    },
    {
        id: 5, title: "O Som da Tua Voz", x: 85, y: 40,
        audio: "audios/C5.mp3", text: "Seja rindo, falando sério ou sussurrando... tua voz me acalma, me conforta e me faz sentir em casa, não importa onde eu esteja.",
        connectsTo: [6]
    },
    {
        id: 6, title: "Tua Leveza", x: 75, y: 28,
        audio: "audios/C6.mp3", text: "Você tem o dom de tornar os momentos mais simples em algo especial e os problemas mais pesados em algo mais fácil de carregar.",
        connectsTo: [7]
    },
    {
        id: 7, title: "Teu Jeitinho", x: 63, y: 22,
        audio: "audios/C7.mp3", text: "As tuas manias, o jeito que inclina a cabeça quando tá curiosa... São os pequenos detalhes que me fazem te amar cada vez mais.",
        connectsTo: [8]
    },
    {
        id: 8, title: "Tua Leveza", x: 75, y: 28,
        audio: "audios/C8.mp3", text: "Você tem o dom de tornar os momentos mais simples em algo especial e os problemas mais pesados em algo mais fácil de carregar.",
        connectsTo: [7]
    },
    {
        id: 9, title: "Teu Jeitinho", x: 63, y: 22,
        audio: "audios/C9.mp3", text: "As tuas manias, o jeito que inclina a cabeça quando tá curiosa... São os pequenos detalhes que me fazem te amar cada vez mais.",
        connectsTo: [8]
    },
    {
        id: 10, title: "Tua Paixão", x: 50, y: 25,
        audio: "audios/C10.mp3", text: "A intensidade que você coloca em tudo que ama é contagiante. Me faz querer viver tudo com a mesma paixão que você.",
        connectsTo: [9]
    },
    {
        id: 11, title: "Teu Abraço", x: 37, y: 22,
        audio: "audios/C15.mp3", text: "É o meu lugar seguro. O único lugar no mundo onde tudo se acalma e eu me sinto inteiramente protegido.",
        connectsTo: [10]
    },
    {
        id: 12, title: "Tua Bondade", x: 25, y: 28,
        audio: "audios/C14.mp3", text: "A forma como você trata todo mundo, com empatia e carinho, me mostra todos os dias a beleza da sua alma.",
        connectsTo: [11]
    },
    {
        id: 13, title: "O Brilho no Teu Olhar", x: 15, y: 40,
        audio: "audios/C16.mp3", text: "Quando você fala de algo que ama, teus olhos brilham de um jeito... É como olhar para duas estrelas supernovas.",
        connectsTo: [12]
    },
    {
        id: 15, title: "Teu Senso de Humor", x: 22, y: 70,
        audio: "audios/C17.mp3", text: "Você consegue me fazer rir nos momentos mais inesperados. A vida do seu lado é infinitamente mais divertida.",
        connectsTo: [14]
    },
    {
        id: 16, title: "Tua Companhia", x: 35, y: 82,
        audio: "audios/C18.mp3", text: "Seja num silêncio confortável ou numa conversa sem fim, ter você por perto é tudo que eu preciso pra ser feliz.",
        connectsTo: [1]
    },
    {
        id: 17, title: "Tua Honestidade", x: 40, y: 50,
        audio: "audios/C19.mp3", text: "Você é a pessoa mais genuína que existe. Sua sinceridade me dá a segurança de que tudo entre a gente é real.",
        connectsTo: [8]
    },
    {
        id: 20, title: "Tua Ambição", x: 35, y: 35,
        audio: "audios/C20.mp3", text: "Ver você correr atrás dos seus sonhos com tanta garra me enche de orgulho e me motiva a buscar os meus também.",
        connectsTo: [9, 10]
    },
    {
        id: 21, title: "Tua Generosidade", x: 65, y: 35,
        audio: "audios/C21.mp3", text: "Você divide o que tem, seu tempo, seu carinho... sem esperar nada em troca. Seu coração é gigante.",
        connectsTo: [6, 7]
    },
    {
        id: 22 , title: "A Paz que Você Traz", x: 50, y: 40,
        audio: "audios/C22.mp3", text: "No meio do caos da vida, você é a minha calmaria. Chegar perto de você é como chegar em paz.",
        connectsTo: [18, 19]
    },
    {
        id: 23, title: "Simplesmente... Você", isFinal: true, x: 50, y: 10,
        audio: "audios/C23.mp3", text: "Cada elogio é só um fragmento. A verdade é que a sua existência inteira é a coisa mais linda desse universo. Você é meu tudo. Eu te amo.",
        connectsTo: [7, 9]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const starfield = document.getElementById('starfield');
    const modal = document.getElementById('memory-modal');
    const memoryContent = document.getElementById('memory-content');
    const universe = document.getElementById('universe');
    const loadingScreen = document.getElementById('loading-screen');
    const body = document.body;
    const closeModalBtn = document.getElementById('close-modal-btn');

    let activeStar = null;
    let lastTransX = 0, lastTransY = 0;

    // 1. Criar e posicionar as estrelas
    memories.forEach(memory => {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${memory.x}%`;
        star.style.top = `${memory.y}%`;
        star.dataset.id = memory.id;
        star.addEventListener('click', (e) => {
            e.stopPropagation();
            showMemory(memory, star);
        });
        starfield.appendChild(star);
    });

    // 2. Lógica para mostrar a memória no modal (SIMPLIFICADA)
    const showMemory = (memory, starElement) => {
        if (body.classList.contains('zoomed-in')) return;

        activeStar = starElement;

        const scale = 3;
        const starX = (memory.x / 100) * starfield.offsetWidth;
        const starY = (memory.y / 100) * starfield.offsetHeight;
        const targetX = -starX * scale + window.innerWidth / 2;
        const targetY = -starY * scale + window.innerHeight / 2;
        
        starfield.style.transform = `translate(${targetX}px, ${targetY}px) scale(${scale})`;
        body.classList.add('zoomed-in');

        // O conteúdo é gerado diretamente, sem verificar por quiz.
        const contentHTML = `
            <h2>${memory.title}</h2>
            <p>${memory.text}</p>
            ${memory.audio ? `
                <div class="audio-player">
                    <audio id="memory-audio-${memory.id}" src="${memory.audio}" preload="auto" controls></audio>
                </div>` : ''}
        `;

        memoryContent.innerHTML = contentHTML;
        
        setTimeout(() => {
            modal.classList.add('active');
        }, 300);
    };
    
    // 3. Lógica para fechar o modal
    const closeModal = () => {
        if (!modal.classList.contains('active')) return;

        const mediaInModal = modal.querySelectorAll('video, audio');
        mediaInModal.forEach(media => media.pause());

        modal.classList.remove('active');
        body.classList.remove('zoomed-in');
        starfield.style.transform = `translate(${lastTransX}px, ${lastTransY}px) scale(1)`;

        if (activeStar) {
            activeStar.classList.add('vanished');
            if(memories.find(m => m.id == activeStar.dataset.id)?.isFinal){
                setTimeout(revealConstellation, 500);
            }
        }
    };
    
    // 4. Lógica de navegação por toque (sem alterações)
    let isDragging = false, startX, startY, transX = 0, transY = 0;

    const onPointerDown = (e) => {
        if (body.classList.contains('zoomed-in')) return;
        isDragging = true;
        startX = e.clientX || e.touches[0].clientX;
        startY = e.clientY || e.touches[0].clientY;
        universe.style.cursor = 'grabbing';
        starfield.style.transition = 'none';
    };

    const onPointerMove = (e) => {
        if (!isDragging) return;
        const currentX = e.clientX || e.touches[0].clientX;
        const currentY = e.clientY || e.touches[0].clientY;
        const deltaX = currentX - startX;
        const deltaY = currentY - startY;
        transX = lastTransX + deltaX;
        transY = lastTransY + deltaY;
        
        const maxTransX = starfield.offsetWidth - window.innerWidth;
        const maxTransY = starfield.offsetHeight - window.innerHeight;
        transX = Math.max(-maxTransX, Math.min(0, transX));
        transY = Math.max(-maxTransY, Math.min(0, transY));

        starfield.style.transform = `translate(${transX}px, ${transY}px)`;
    };

    const onPointerUp = () => {
        if (!isDragging) return;
        isDragging = false;
        lastTransX = transX;
        lastTransY = transY;
        universe.style.cursor = 'grab';
        starfield.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    };

    // 5. Função da revelação final (sem alterações)
    const revealConstellation = () => {
        body.classList.add('final-reveal');
        
        let avgX = 0, avgY = 0, count = 0;
        memories.forEach(mem => {
            avgX += mem.x;
            avgY += mem.y;
            count++;
        });
        avgX /= count;
        avgY /= count;
        
        const scale = 1.2;
        const targetX = - (avgX / 100 * starfield.offsetWidth) * scale + window.innerWidth / 2;
        const targetY = - (avgY / 100 * starfield.offsetHeight) * scale + window.innerHeight / 2;

        starfield.style.transform = `translate(${targetX}px, ${targetY}px) scale(${scale})`;
    };
    
    // 6. Função para desenhar as linhas (sem alterações)
    
    // 7. Event Listeners
    closeModalBtn.addEventListener('click', closeModal);
    universe.addEventListener('click', closeModal);
    modal.querySelector('.modal-handle').addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => event.stopPropagation());

    // Listener de clique ÚNICO, agora SÓ para o player de áudio
    document.addEventListener('click', function(e) {
        const playButton = e.target.closest('.play-audio-button');
        if (playButton) {
            console.log('%c▶️ Botão de áudio clicado!', 'color: lightblue; font-weight: bold;');

            const memoryId = playButton.dataset.memoryId;
            const audio = document.getElementById(`memory-audio-${memoryId}`);
            const container = playButton.closest('.audio-player');

            if (!audio || !container) {
                console.error('Erro: Elemento de áudio ou container não encontrado para o memoryId:', memoryId);
                return;
            }

            const progressBar = container.querySelector('.progress-bar');
            const timeDisplay = container.querySelector('.audio-time');
            const playIcon = playButton.querySelector('.play-icon');
            const pauseIcon = playButton.querySelector('.pause-icon');

            if (audio.paused) {
                audio.play();
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'inline';
            } else {
                audio.pause();
                playIcon.style.display = 'inline';
                pauseIcon.style.display = 'none';
            }

            // Adiciona os listeners de áudio APENAS UMA VEZ
            if (!playButton.dataset.listenersAttached) {
                console.log('Adicionando listeners de "timeupdate" e "ended" pela primeira vez para o áudio:', memoryId);
                
                audio.addEventListener('timeupdate', () => {
                    const progress = (audio.currentTime / audio.duration) * 100;
                    progressBar.style.width = progress + '%';
                    const minutes = Math.floor(audio.currentTime / 60);
                    const seconds = Math.floor(audio.currentTime % 60);
                    timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                });

                audio.addEventListener('ended', () => {
                    playIcon.style.display = 'inline';
                    pauseIcon.style.display = 'none';
                    progressBar.style.width = '0%';
                    audio.currentTime = 0;
                    timeDisplay.textContent = '0:00';
                });

                playButton.dataset.listenersAttached = 'true';
            }
        }
    });

    universe.addEventListener('mousedown', onPointerDown);
    universe.addEventListener('mousemove', onPointerMove);
    universe.addEventListener('mouseup', onPointerUp);
    universe.addEventListener('mouseleave', onPointerUp);
    universe.addEventListener('touchstart', onPointerDown, { passive: true });
    universe.addEventListener('touchmove', onPointerMove, { passive: true });
    universe.addEventListener('touchend', onPointerUp);

    // 8. Inicialização
    setTimeout(() => {
        loadingScreen.classList.remove('active');
    }, 1000);
});