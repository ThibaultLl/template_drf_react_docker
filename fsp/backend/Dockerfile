# Dockerfile - Backend
# Utilisation d'une image Python
FROM python:3.9-slim

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de requirements pour installer les dépendances
COPY backend/requirements.txt /app/

# Installation des dépendances Python
RUN pip install --no-cache-dir -r requirements.txt

# Copier le reste des fichiers du backend
COPY backend /app/

# Exposer le port 8000 (par défaut pour Django)
EXPOSE 8000

# Lancer l'application Django (avec gunicorn ou le serveur de développement)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
