FROM node:20
WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 3000
ENV JWT_SECRET=eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcyMjcxNDU3MCwiaWF0IjoxNzIyNzE0NTcwfQ.YtdzHrd9Xlg8g_y-fTam5aYwAnXoqPL9ZI5yY3Mhwa8
ENV JWT_EXPIRATION_SPAN=3h
ENV DATABASE_URL="mongodb://localhost:27044/monouser?replicaSet=rs0&directConnection=true"
CMD ["yarn", "start:dev"]