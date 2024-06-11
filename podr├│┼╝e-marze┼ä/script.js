// Funkcja do wyświetlania sekcji
function showSection(sectionId) {
    // Ukryj wszystkie sekcje
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    // Wyświetl wybraną sekcję
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
        if (sectionId === 'destinations') {
            showDestinationButtons();
        }
    }
}

// Funkcja do wyświetlania przycisków dla destynacji
function showDestinationButtons() {
    const destinations = [
        { name: 'Wenecja, Włochy', img: 'wenecja.jpg', desc: 'Romantyczne miasto na wodzie, pełne zabytków i kanałów.' },
        { name: 'Kyoto, Japonia', img: 'kyoto.jpg', desc: 'Kulturalna stolica Japonii, znana z pięknych świątyń i ogrodów.' },
        { name: 'Paryż, Francja', img: 'paryz.jpg', desc: 'Miasto miłości, słynące z wieży Eiffla i artystycznej atmosfery.' },
        { name: 'Nowy Jork, USA', img: 'nowyjork.jpg', desc: 'Kosmopolityczna metropolia, oferująca niezliczone atrakcje i rozrywki.' },
        { name: 'Sydney, Australia', img: 'sydney.jpg', desc: 'Znane z Opery w Sydney, pięknych plaż i przyjaznej atmosfery.' }
    ];
    const buttonContainer = document.getElementById('destinationButtonsContainer');

    // Sprawdzenie, czy przyciski już istnieją
    if (buttonContainer.children.length === 0) {
        destinations.forEach(destination => {
            const destinationDiv = document.createElement('div');
            destinationDiv.className = 'destination';

            const img = document.createElement('img');
            img.src = destination.img;
            img.alt = destination.name;
            
            const desc = document.createElement('p');
            desc.textContent = destination.desc;

            const button = document.createElement('button');
            button.textContent = 'Wybierz';
            button.onclick = function() {
                showSection('flights');
            };

            destinationDiv.appendChild(img);
            destinationDiv.appendChild(desc);
            destinationDiv.appendChild(button);
            buttonContainer.appendChild(destinationDiv);
        });
