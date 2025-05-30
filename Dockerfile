FROM node:18

WORKDIR /app

COPY . .

EXPOSE 8888

# Comando para ejecutar el servidor
CMD ["node", "app.js"]
