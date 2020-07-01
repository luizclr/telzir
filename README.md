<p align="center">
  <img
    src="src/assets/images/telzir-logo.png"
    height="130px"
  />
<p>

<p align="center">
  <a href="https://app.netlify.com/sites/luiz-telzir/deploys">
    <img
      src="https://api.netlify.com/api/v1/badges/9b513ed1-5e13-4766-a67d-510c84e793e1/deploy-status"
      alt="Netlify Status"/>
  </a>
  <a href="https://circleci.com/gh/luizclr/telzir">
    <img
      src="https://circleci.com/gh/luizclr/telzir.svg?style=svg&circle-token=6403f6d14189baa45369e2fb8484c4f7dfb0e94b"
      alt="CircleCI"/>
  </a>
</p>

## Table of Contents

- [Application](#application)
- [Requirements](#requirements)
- [Running](#running)
  - [Install](#install)
  - [Yarn](#yarn)
  - [Docker](#docker)
- [Testing](#testing)
- [Build](#build)
- [License](#license)

## Application

<p align="center">
  <img
    src="src/assets/images/telzir-home.png"
    width="630px"
    style="-webkit-box-shadow: 0px 4px 28px -12px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 4px 28px -12px rgba(0,0,0,0.75);
  box-shadow: 0px 4px 28px -12px rgba(0,0,0,0.75);
  border: 10px solid white; border-radius: 5px;"
  />
</p>

> A _Telzir_ application that helps customers to choose the best phone plan acording to their calling time.

<h2 align="center"><a href="https://luiz-telzir.netlify.app/">https://luiz-telzir.netlify.app/</a><h2>

## Requirements

- nodejs >= 12.18.1
- yarn >= 1.22.4

## Running

### Install

```bash
# Install packages
yarn install
```

### Yarn

```bash
# Start dev server locally
yarn start
```

### Docker

```bash
# Build
docker build -t telzir:dev .
# Run
docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm telzir:dev
```

Application will be opened automatically on [localhost:3000](http://localhost:3000).

## Testing

```bash
# run teste
yarn test
# test coverage
yarn test:coverage
```

## Build

```bash
# Build for production
yarn build
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
