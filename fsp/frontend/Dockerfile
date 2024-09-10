# Dockerfile - Frontend (Development)
FROM node:18 as build

WORKDIR /app

# Copie le package.json pour installer les dépendances
COPY frontend/package.json /app/

RUN npm install

# Copie le reste des fichiers frontend
COPY frontend /app/

EXPOSE 5173

CMD ["npm", "run", "dev"]
