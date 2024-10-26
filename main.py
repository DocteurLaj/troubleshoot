from flask import Flask, request, render_template, jsonify
import os

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'  # Dossier pour sauvegarder les fichiers
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER 

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'message': 'Aucun fichier détecté'}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'message': 'Aucun fichier sélectionné'}), 400
    
    # Sauvegarde du fichier dans le dossier uploads
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(file_path)
    
    return jsonify({'message': 'Fichier téléchargé avec succès !', 'filename': file.filename})

if __name__ == '__main__':
    app.run(debug=True)
