document.addEventListener('DOMContentLoaded', () => {
    // Agregar Header Dinámicamente
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="header-container">
            <img src="./_img/icono.png" alt="Logo" class="logo-icon">
            <h1>SpotiFree</h1>
        </div>
    `;
    document.body.prepend(header);

    // Agregar Footer Dinámicamente
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>&copy; 2025 SpotiFree. Todos los derechos reservados.</p>
    `;
    document.body.appendChild(footer);

    // Crear el contenedor de categorías
    const main = document.createElement('main');
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');
    main.appendChild(gridContainer);
    document.body.appendChild(main); // Asegúrate de añadirlo al body

    // Datos de las categorías
    const categoriesData = [
        { name: 'Pop', img: './_img/pop.jpg', page: 'pop.html' },
        { name: 'Rock', img: './_img/rock.jpg', page: 'rock.html' },
        { name: 'Dance', img: './_img/dance.jpg', page: 'dance.html' },
        { name: 'Latina', img: './_img/latina.jpg', page: 'latina.html' },
        { name: 'Clásica', img: './_img/clasica.jpg', page: 'clasica.html' },
        { name: 'Anime', img: './_img/anime.jpg', page: 'anime.html' },
        { name: 'Jazz', img: './_img/jazz.jpg', page: 'jazz.html' },
        { name: 'BSO', img: './_img/bso.jpg', page: 'bso.html' },
        { name: 'Metal', img: './_img/metal.png', page: 'metal.html' },
        { name: 'Reggaeton', img: './_img/reggaeton.jpg', page: 'reggaeton.html' },
        { name: 'Rap', img: './_img/rap.jpg', page: 'rap.html' }
    ];

    const songInfo = {
        'pop.html': { cover: './_img/pop-cover.jpg', songName: 'Sorry', artist: 'Justin Bieber', mp3: './_mp3/pop-song.mp3' },
        'rock.html': { cover: './_img/rock-cover.jpg', songName: 'This Afternoon', artist: 'Nickelback', mp3: './_mp3/rock-song.mp3' },
        'dance.html': { cover: './_img/dance-cover.jpg', songName: 'Black Widow', artist: 'Iggy Azalea ft Rita Ora', mp3: './_mp3/dance-song.mp3' },
        'latina.html': { cover: './_img/latina-cover.jpg', songName: 'John The Revelator', artist: 'Mexicoma', mp3: './_mp3/latina-song.mp3' },
        'clasica.html': { cover: './_img/clasica-cover.jpg', songName: 'Maestro del Viento', artist: 'Emboque', mp3: './_mp3/clasica-song.mp3' },
        'anime.html': { cover: './_img/anime-cover.jpg', songName: 'Doomsday', artist: 'Atreyu', mp3: './_mp3/anime-song.mp3' },
        'jazz.html': { cover: './_img/jazz-cover.jpg', songName: 'I Feel Like Shit', artist: 'Danny Worsnop', mp3: './_mp3/jazz-song.mp3' },
        'bso.html': { cover: './_img/bso-cover.jpg', songName: 'The Other Side', artist: 'The Greatest Showman BSO', mp3: './_mp3/bso-song.mp3' },
        'metal.html': { cover: './_img/metal-cover.jpg', songName: 'A Match Made In Heaven', artist: 'Architects', mp3: './_mp3/metal-song.mp3' },
        'reggaeton.html': { cover: './_img/reggaeton-cover.jpg', songName: 'Gasolina', artist: 'Daddy Yankee', mp3: './_mp3/reggaeton-song.mp3' },
        'rap.html': { cover: './_img/rap-cover.jpg', songName: 'Lose Yourself', artist: 'Eminem', mp3: './_mp3/rap-song.mp3' }
    };

    // Generar dinámicamente las categorías
    categoriesData.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        categoryDiv.setAttribute('data-page', category.page);

        const img = document.createElement('img');
        img.src = category.img;
        img.alt = category.name;

        const p = document.createElement('p');
        p.textContent = category.name;

        categoryDiv.appendChild(img);
        categoryDiv.appendChild(p);
        gridContainer.appendChild(categoryDiv);
    });

    // Popup de canciones
    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.classList.add('popup');
    popup.style.display = 'none'; // Al principio no se muestra

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    popupContent.innerHTML = `
        <span class="close">&times;</span>
        <img id="cover" src="" alt="Cover">
        <p id="song-name"></p>
        <p id="artist-name"></p>
        <audio id="song-player" controls>
            <source id="song-source" type="audio/mp3">
            Tu navegador no soporta el elemento de audio.
        </audio>
        <button class="close-btn">Cerrar</button>
    `;

    popup.appendChild(popupContent);
    document.body.appendChild(popup);

    const cover = document.getElementById('cover');
    const songName = document.getElementById('song-name');
    const artistName = document.getElementById('artist-name');
    const songSource = document.getElementById('song-source');
    const audioPlayer = document.getElementById('song-player');
    const closeButton = document.querySelector('.close');
    const closeBtn = document.querySelector('.close-btn');

    gridContainer.addEventListener('click', event => {
        const category = event.target.closest('.category');
        if (!category) return;

        const page = category.getAttribute('data-page');
        const data = songInfo[page];

        if (data) {
            cover.src = data.cover;
            songName.textContent = `🎵 ${data.songName}`;
            artistName.textContent = `👤 ${data.artist}`;
            songSource.src = data.mp3;
            audioPlayer.load();
            popup.style.display = 'flex';
        }
    });

    // Cerrar popup
    const closePopup = () => {
        popup.style.display = 'none';
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    };

    closeButton.addEventListener('click', closePopup);
    closeBtn.addEventListener('click', closePopup);
    window.addEventListener('click', event => {
        if (event.target === popup) {
            closePopup();
        }
    });

    // Modal de Cookies
    const cookieModal = document.createElement('div');
    cookieModal.id = 'cookie-modal';
    cookieModal.classList.add('cookie-modal');
    cookieModal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" id="close-modal">&times;</span>
            <h2>¡Acepta las Cookies o Dona!</h2>
            <p>Este sitio utiliza cookies de terceros para mejorar la experiencia. Puedes aceptarlas o si prefieres, donar 5€ para continuar.</p>
            <button id="accept-cookies">Aceptar Cookies</button>
            <button id="donate">Donar 5€</button>
        </div>
    `;
    document.body.appendChild(cookieModal);

    const acceptCookiesButton = document.getElementById('accept-cookies');
    const donateButton = document.getElementById('donate');
    const closeModalButton = document.getElementById('close-modal');

    cookieModal.style.display = 'flex';

    acceptCookiesButton.addEventListener('click', () => {
        cookieModal.style.display = 'none';

        // Mostrar el mensaje de cookies aceptadas
        const cookieMessage = document.createElement('div');
        cookieMessage.classList.add('cookie-message');
        cookieMessage.innerHTML = `<p>¡Cookies aceptadas!</p>`;
        document.body.appendChild(cookieMessage);

        // Mostrar el mensaje por 3 segundos y luego ocultarlo
        cookieMessage.style.display = 'block';
        setTimeout(() => {
            cookieMessage.style.display = 'none';
            document.body.removeChild(cookieMessage); // Eliminar el mensaje de la página después de mostrarlo
        }, 3000); // 3 segundos
    });

// Modal de Donación
donateButton.addEventListener('click', () => {
    // Abrir enlace de PayPal en una nueva pestaña
    const donationWindow = window.open('https://www.paypal.com/donate?hosted_button_id=TheBlackLotusDemon', '_blank');
    // No cerrar el modal de cookies todavía
    // Solo cerramos el modal de cookies cuando la nueva pestaña se haya cerrado

    // Esperar a que la pestaña de donación se cierre y mostrar el mensaje de agradecimiento
    const checkWindowClose = setInterval(() => {
        if (donationWindow.closed) {
            clearInterval(checkWindowClose); // Dejar de comprobar cuando la pestaña se cierre

            // Cerrar el modal de cookies
            cookieModal.style.display = 'none';

            // Mostrar el mensaje de agradecimiento
            const donationMessage = document.createElement('div');
            donationMessage.classList.add('donation-message');
            donationMessage.innerHTML = `<p>¡Gracias por su donación!</p>`;
            document.body.appendChild(donationMessage);

            // Mostrar el mensaje por 3 segundos y luego ocultarlo
            donationMessage.style.display = 'block';
            setTimeout(() => {
                donationMessage.style.display = 'none';
                document.body.removeChild(donationMessage); // Eliminar el mensaje de la página después de mostrarlo
            }, 3000); // 3 segundos
        }
    }, 500); // Comprobar cada 500ms si la ventana de donación está cerrada
});
});
