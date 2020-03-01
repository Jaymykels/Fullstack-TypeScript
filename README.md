<p align="center">
  <h1>Fullstack TypeScript</h1>
</p>
  
  <p align="center">Built with TypeScript, Nestjs, Reactjs, MongoDB and Docker.</p>
    <p align="center">


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

## Bonus
```bash
# seed the database with dummy data
$ docker-compose run server yarn seed
```