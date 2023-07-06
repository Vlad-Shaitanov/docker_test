# с какого image хотим сделать свой
FROM node

# Рабочая директория в образе (контекст проекта)
WORKDIR /app

# Если node_modules не менялись, докер возьмет все из кэша
COPY package.json /app

# Установка зависимостей проекта
# RUN срабатывает при сборке образа
RUN npm install

# Копируем все файлы из локального проекта в рабочую директорию контейнера
COPY . .

# какой порт запускается
EXPOSE 3000

# Запуск проекта
# CMD срабатывает непосредственно при запуске проекта
CMD ["node", "app.js"]