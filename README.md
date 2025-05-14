# Alhena GraphQL
GraphQL layer for Aparicio Lab's instance of Alhena.

## Features

- Powered by [Apollo](https://www.apollographql.com/)
- Production build in [Docker](https://www.docker.com/)

## Install Dependencies
Note: use `node v12`
```
yarn install
```

## Start Development Server
```
yarn start
```
Open [http://localhost:4000/graphql](http://localhost:4000/graphql) to view the playground in the browser.

## Docker build and Dockerhub
This project can be built for production and packaged with Docker. Replace the version number with the version of the application being built.

```
docker build . -t alhena-graphql:v1.0.6

# (Optional) for testing
docker run -d -p 4000:4000 --name graphql alhena-graphql:v1.0.6

# Push to Dockerhub

# Log in, if needed
docker login -u molonc 

docker tag alhena-graphql:v1.0.6 molonc/alhena-graphql:v1.0.6
docker push molonc/alhena-graphql:v1.0.6
```

