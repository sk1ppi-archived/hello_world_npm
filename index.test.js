/* eslint-disable no-undef */
// Import the function to be tested
const {
    HELLO_WORLD_STRING,
    getHelloWorldAsString,
    getHelloWorldAsArray
} = require('./index');

it('getHelloWorldAsString should return a string', () => {
    const result = getHelloWorldAsString();
    expect(typeof result).toBe('string');
});

it('getHelloWorldAsString should return the correct string', () => {
    const result = getHelloWorldAsString();
    expect(result).toBe(HELLO_WORLD_STRING);
});

it('getHelloWorldAsArray should return an array', () => {
    const result = getHelloWorldAsArray();
    expect(Array.isArray(result)).toBe(true);
});

it('getHelloWorldAsArray should return the correct array', () => {
    const result = getHelloWorldAsArray();
    expect(result).toEqual(['Hello', 'World']);
});