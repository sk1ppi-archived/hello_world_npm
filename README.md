# @sk1ppi/hello-world-npm

![Made by](https://img.shields.io/badge/SK1PPI-8A2BE2)
![GitHub License](https://img.shields.io/github/license/sk1ppi/hello_world_npm)
![NPM Version](https://img.shields.io/npm/v/%40sk1ppi%2Fhello-world-npm)

A simple hello world npm package. This is a test package to learn how to create and publish npm packages.

## Install

To install the package, use the following command:


```shell
npm i @sk1ppi/hello-world-npm
```

## Example

To use the package, use the following code example:

```js
const {
    HELLO_WORLD_STRING,
    getHelloWorldAsString,
    getHelloWorldAsArray,
 } = require('@sk1ppi/hello-world-npm');

console.log(HELLO_WORLD_STRING);
// => Hello World!

console.log(getHelloWorldAsString());
// => Hello World!

console.log(getHelloWorldAsArray());
// => [ 'Hello', 'World!' ]
```

## Testing

To run tests, use the following command:

```shell
npm run test
```

## Contribute

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Reach out

![image0_0-3](https://github.com/sk1ppi/cardano_nami_wallet_recovery/assets/121653522/4dc2f3ff-a082-45fb-80de-d3a32bea18ae)

- [Via e-mail](mailto:kcxyzxyz@icloud.com?subject=Reaching%20out!)

## License

[Apache-2.0](LICENSE)