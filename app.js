function changeColor(note, color) {
    note.className = 'sticky-note'; // Reseta as classes
    if (color === '#ffcc00') {
        note.classList.add('yellow');
    } else if (color === '#9370DB') {
        note.classList.add('purple');
    } else if (color === '#87CEFA') {
        note.classList.add('blue');
    }
}

function editNote(note) {
    const title = note.querySelector('h2');
    const content = note.querySelector('p');
    title.contentEditable = true;
    content.contentEditable = true;
    note.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.4)';

    // Adicionando evento de clique para selecionar todo o texto
    title.addEventListener('click', function() {
        selectText(title);
    });

    content.addEventListener('click', function() {
        selectText(content);
    });
}

function selectText(element) {
    const range = document.createRange();
    range.selectNodeContents(element);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}

function addNewNote() {
    const newNote = document.createElement('div');
    newNote.classList.add('sticky-note', 'yellow'); // Adiciona a classe yellow por padrão
    newNote.innerHTML = `
        <div class="color-dots">
            <div class="dot yellow" onclick="changeColor(this.parentElement.parentElement, '#ffcc00')"></div>
            <div class="dot purple" onclick="changeColor(this.parentElement.parentElement, '#9370DB')"></div>
            <div class="dot blue" onclick="changeColor(this.parentElement.parentElement, '#87CEFA')"></div>
        </div>
        <h2 contenteditable="true" spellcheck="false">Nova Ideia</h2>
        <p contenteditable="true" spellcheck="false">Escreva sua ideia aqui...</p>
    `;
    document.querySelector('.container').appendChild(newNote);
    editNote(newNote); // Chamando editNote para o novo elemento
}
