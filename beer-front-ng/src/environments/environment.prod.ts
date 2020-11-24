export const environment = {
  production: true,
  backend: {
    protocol: 'http',
    host: '0.0.0.0',
    port: '3000',
    endpoints: {
      allBeers: '/beers',
      randomBeer: '/beers/random',
      oneBeer: '/beers/:id'
      /*,
      allUsers: '/users', //TODO change if we can put users CRUD in other endpoints
      randomUser: '/users/random',
      oneUser: '/users/:id'*/
    }
  }
};
