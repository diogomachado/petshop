# Petshop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Libraries used

- Angular Material
- Lottie
- FakerJS
- Cypress
- @ngxs/storage-plugin

## Running the project

Before run the project, we need to launch the API Rest using Docker, you can see details here [https://hub.docker.com/r/swaggerapi/petstore/](https://hub.docker.com/r/swaggerapi/petstore/)

Making download of the image

```
docker pull swaggerapi/petstore
```

Lauching the server

```
docker run -d -e SWAGGER_HOST=http://petstore.swagger.io \
  -e SWAGGER_URL=http://localhost \
  -e SWAGGER_BASE_PATH=/v2 -p 80:8080 swaggerapi/petstore
```

On the environment files, you should set `pathUrl``

```
export const environment = {
  production: false,
  apiPath: 'http://localhost',
};
```

Installing dependencies and running the app

```
npm i
```

```
ng serve
```

## Tests

- Jest
- Cypress (e2e)

To generate the coverage reports, just run the command below:

```
ng test --coverage
```

Running e2e tests:

```
npm run cypress
```

## Improvements

- Add a way to add more than one image where add a new pet
- Validate category
- Validate tags
- Show the first image on the list, but the fake API doesn't return a URL valid, so I should create a directive to provide a fallback image when the URL doesn't load correctly
- Add more coverage of tests
- Unsubscribe unnecessary subscriptions
