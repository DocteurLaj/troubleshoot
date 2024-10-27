

const dropZone = document.getElementById('drop-zone');
const message = document.getElementById('message');
// Empêcher les comportements par défaut pour le glisser-déposer
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false);
});
function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}
// Ajouter une classe pour styliser la zone lors du glisser
['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, () => dropZone.classList.add('hover'), false);
});
['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, () => dropZone.classList.remove('hover'), false);
});
// Gestion de l'événement drop
dropZone.addEventListener('drop', handleDrop, false);
function handleDrop(e) {
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        const file = files[0];
        uploadFile(file);
    }
}
// Envoyer le fichier au serveur pour le sauvegarder
function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        message.innerText = data.message; // Affiche un message de confirmation
    })
    .catch(error => {
        message.innerText = "Erreur lors du téléchargement";
        console.error('Erreur :', error);
    });
}
