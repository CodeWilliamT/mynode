FROM node:18.16.1
WORKDIR /app
COPY . .
RUN echo hello world
CMD ["node","test.js"]