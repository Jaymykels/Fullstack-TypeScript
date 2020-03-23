<p align="center">
  <h1>Fullstack TypeScript</h1>
</p>
  
<p align="center">Built with TypeScript, Nestjs, Reactjs, MongoDB, Elasticsearch and Docker.</p>

## Dependencies

Install [Docker]('https://www.docker.com/products/docker-desktop)

## Installation

```bash
$ docker-compose build
```

## Running the app

```bash
$ docker-compose-up
```

## Test

```bash
# server unit tests
$ docker-compose run server yarn test --forceExit

# server e2e tests
$ docker-compose run server yarn test:integration --forceExit
```


## Usage

Navigate to `http://localhost:5000/api` and browse the swagger api documentation

Navigate to `http://localhost:3000` and browse the application

Navigate to `http://localhost:5601` to access kibana

## Bonus
```bash
# seed the database with dummy data
$ docker-compose run server yarn seed
```
